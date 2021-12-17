/** @format */
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { initial_player_data } from '../data/initalData';
import { usePlayers } from '../data/PlayerProvider';

const Landing = () => {
    const provider_player_list = usePlayers();
    const [playerList, set_playerList] = useState(initial_player_data);

    function createPlayer() {
        // TODO:
        // USE UUID
        // ASSIGN COLOR
        var newPlayerName = `Player ${playerList.length + 1}`;
        console.log(newPlayerName);
        set_playerList([...playerList, { name: newPlayerName, balance: 0 }]);
    }
    function removePlayer(name_to_remove) {
        set_playerList(
            playerList.filter((player) => player.name !== name_to_remove)
        );
    }

    return (
        <div className='landing'>
            <div className='header'>
                <h1>The Monopoly Bank</h1>
            </div>
            <div className='amount-form'>
                <h3>Enter a starting amount: $ </h3>
                <input
                    type='text'
                    className='amount-input'
                    defaultValue='1900'
                />
            </div>
            <div className='player-form'>
                <h3>Add the players:</h3>
                <div className='players-list'>
                    {playerList.map((player) => {
                        return (
                            <div className='player-name-box' key={player.name}>
                                <input
                                    type='text'
                                    className='player-name'
                                    defaultValue={player.name}
                                />
                                <button
                                    className='removePlayer'
                                    onClick={() => {
                                        removePlayer(player.name);
                                    }}
                                >
                                    X
                                </button>
                            </div>
                        );
                    })}
                </div>
                <button className='add-player-box' onClick={createPlayer}>
                    <span className='text'>Add a new player</span>
                </button>
            </div>
            <Link to='/Home'>
                <button className='start-game-button'>Start the game!</button>
            </Link>
        </div>
    );
};

export default Landing;
