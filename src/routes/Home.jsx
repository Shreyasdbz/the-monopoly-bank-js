/** @format */
// import { Link } from 'react-router-dom';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { usePlayers, usePlayersUpdate } from '../data/PlayerProvider';
import { useState } from 'react/cjs/react.development';
import PerformTransactionPopUp from '../components/PerformTransactionPopUp';
import ResetDataPopUp from '../components/ResetDataPopUp';

const Home = () => {
    const playerList = usePlayers();
    const updatePlayerList = usePlayersUpdate();
    const [resetConfirmationBoxActive, set_resetConfirmationBoxActive] =
        useState(false);
    const [transactionPopupActive, set_transactionPopupActive] =
        useState(false);
    const [overlayActive, set_overlayActive] = useState(false);
    const [currentAction, set_currentAction] = useState(null);
    const [currentPlayer, set_currentPlayer] = useState(null);
    const [currentTransactionAmount, set_currentTransactionAmount] =
        useState(null);

    function handleResetConfirmation(action) {
        if (action === 'SHOW') {
            set_resetConfirmationBoxActive(true);
            set_overlayActive(true);
        } else if (action === 'NO') {
            set_resetConfirmationBoxActive(false);
            set_overlayActive(false);
        } else if (action === 'YES') {
            set_resetConfirmationBoxActive(false);
            set_overlayActive(false);
        }
    }

    function handleTransactionPopUp(action, player) {
        if (action === 'CANCEL') {
            set_overlayActive(false);
            set_transactionPopupActive(false);
            set_currentPlayer(null);
            set_currentAction(null);
            set_currentTransactionAmount(null);
        } else {
            set_overlayActive(true);
            set_transactionPopupActive(true);
            set_currentPlayer(player);
            set_currentAction(action);
        }
    }

    function handleTransaction() {
        // Find player from list
        for (let player of playerList) {
            if (player.id === currentPlayer.id) {
                // Update player's balance
                var amount_to_transact = parseFloat(currentTransactionAmount);
                if (currentAction.toUpperCase() === 'ADD') {
                    player.balance += amount_to_transact;
                } else if (currentAction.toUpperCase() === 'REMOVE') {
                    player.balance -= amount_to_transact;
                }
            }
        }
        // Send updated list to context
        updatePlayerList(playerList);
        // Clear out values
        set_overlayActive(false);
        set_transactionPopupActive(false);
        set_currentPlayer(null);
        set_currentAction(null);
        set_currentTransactionAmount(null);
    }

    return (
        <div className='home-container'>
            {transactionPopupActive ? (
                <PerformTransactionPopUp
                    currentAction={currentAction}
                    currentPlayer={currentPlayer}
                    currentTransactionAmount={currentTransactionAmount}
                    set_currentTransactionAmount={set_currentTransactionAmount}
                    handleTransaction={handleTransaction}
                    handleTransactionPopUp={handleTransactionPopUp}
                />
            ) : (
                <></>
            )}
            {resetConfirmationBoxActive ? (
                <ResetDataPopUp
                    handleResetConfirmation={handleResetConfirmation}
                />
            ) : (
                <></>
            )}
            <div className={`${overlayActive ? 'overlay' : ''}`} />
            <div className='home'>
                <div className='header'>
                    <h2>The Monopoly Bank</h2>
                </div>
                <div className='player-list-box'>
                    <h3 className='title'>Players:</h3>
                    <div className='player-list'>
                        {playerList.map((player) => {
                            return (
                                <div className='player' key={player.id}>
                                    <div
                                        className='name'
                                        style={{
                                            backgroundColor: `${player.color}`,
                                            boxShadow: `0px 2px 10px 2px ${player.color}30`,
                                        }}
                                    >
                                        {player.name}
                                    </div>
                                    <div className='balance'>
                                        $ {player.balance}
                                    </div>
                                    <div className='action-btns'>
                                        <button
                                            className='btn'
                                            style={{
                                                backgroundColor: `${player.color}`,
                                                boxShadow: `0px 2px 10px 2px ${player.color}30`,
                                            }}
                                            onClick={() => {
                                                handleTransactionPopUp(
                                                    'ADD',
                                                    player
                                                );
                                            }}
                                        >
                                            <IoAddCircleOutline className='btn-icon' />
                                        </button>
                                        <button
                                            className='btn'
                                            style={{
                                                backgroundColor: `${player.color}`,
                                                boxShadow: `0px 2px 10px 2px ${player.color}30`,
                                            }}
                                            onClick={() => {
                                                handleTransactionPopUp(
                                                    'REMOVE',
                                                    player
                                                );
                                            }}
                                        >
                                            <IoRemoveCircleOutline className='btn-icon' />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='navigation-btns'>
                    <button className='nav-btn transactions-btn'>
                        View Transactions
                    </button>
                    <button
                        className='nav-btn reset-btn'
                        onClick={() => {
                            handleResetConfirmation('SHOW');
                        }}
                    >
                        Reset all Data
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
