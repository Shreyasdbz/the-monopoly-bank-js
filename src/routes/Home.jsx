/** @format */
// import { Link } from 'react-router-dom';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { useState } from 'react/cjs/react.development';
import { usePlayers } from '../data/PlayerProvider';

const Home = () => {
    const playerList = usePlayers();
    const [resetConfirmationBoxActive, set_resetConfirmationBoxActive] =
        useState(false);
    const [overlayActive, set_overlayActive] = useState(false);

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

    return (
        <div className='home-container'>
            {resetConfirmationBoxActive ? (
                <div className='reset-confirmation-container'>
                    <div className='box'>
                        <h4 className='title'>Reset All Data</h4>
                        <div className='caption'>
                            Are you sure you want to reset all player
                            information and return home?
                        </div>
                        <div className='action-btns'>
                            <button
                                className='btn yes'
                                onClick={() => {
                                    handleResetConfirmation('YES');
                                }}
                            >
                                Yes
                            </button>
                            <button
                                className='btn no'
                                onClick={() => {
                                    handleResetConfirmation('NO');
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
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
                                        >
                                            <IoAddCircleOutline className='btn-icon' />
                                        </button>
                                        <button
                                            className='btn'
                                            style={{
                                                backgroundColor: `${player.color}`,
                                                boxShadow: `0px 2px 10px 2px ${player.color}30`,
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
