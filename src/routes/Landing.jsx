/** @format */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { BiTrash } from 'react-icons/bi';

import { initial_player_data } from '../data/initalData';
import { getRandomColor } from '../data/colorData';
import { usePlayers, usePlayerInitiateContext } from '../data/PlayerProvider';

const Landing = () => {
    const provider_player_list = usePlayers();
    const initiatePlayerList = usePlayerInitiateContext();
    const [playerList, set_playerList] = useState(initial_player_data);
    const [startingAmount, set_startingAmount] = useState(1500);

    function createPlayer() {
        let uuid = uuidv4();
        var newPlayerName = `Player ${playerList.length + 1}`;
        var new_player_to_add = {
            id: uuid,
            name: newPlayerName,
            balance: 0,
            color: getRandomColor(),
        };
        set_playerList([...playerList, new_player_to_add]);
    }
    function removePlayer(id_to_remove) {
        set_playerList(
            playerList.filter((player) => player.id !== id_to_remove)
        );
    }
    function setGamestart() {
        // Update Balances
        playerList.map((player) => {
            player.balance = parseFloat(startingAmount);
        });
        // Log
        console.log(playerList);
        // Send to context
        initiatePlayerList(playerList);
    }

    useEffect(() => {
        set_playerList(provider_player_list);
    }, [provider_player_list]);

    return (
        <div className='landing'>
            <div className='header'>
                <h1>The Monopoly Bank</h1>
            </div>
            <div className='amount-form'>
                <h4>Enter a starting amount:</h4>
                <h4>$</h4>
                <input
                    type='text'
                    className='amount-input'
                    value={startingAmount}
                    onChange={(el) => set_startingAmount(el.target.value)}
                />
            </div>
            <div className='player-form'>
                <h4>Add the players:</h4>
                <div className='players-list'>
                    {playerList.map((player) => {
                        return (
                            <div className='player-name-box' key={player.id}>
                                {/* TODO: Update player name in player list on change ()  */}
                                <input
                                    type='text'
                                    className='player-name'
                                    defaultValue={player.name}
                                    style={{
                                        backgroundColor: `${player.color}`,
                                        boxShadow: `0px 2px 15px 5px ${player.color}25`,
                                    }}
                                />
                                <button
                                    className='remove-player-button'
                                    onClick={() => {
                                        removePlayer(player.id);
                                    }}
                                >
                                    <BiTrash className='icon' />
                                </button>
                            </div>
                        );
                    })}
                </div>
                <button className='add-player-button' onClick={createPlayer}>
                    <span className='text'>Add a new player</span>
                </button>
            </div>
            <Link to='/Home'>
                <button className='start-game-button' onClick={setGamestart}>
                    Start the game!
                </button>
            </Link>
            <a
                href='https://github.com/Shreyasdbz/the-monopoly-bank-js'
                className='footer'
                target='_blank'
                rel='noreferrer'
            >
                Github
            </a>
        </div>
    );
};

export default Landing;
