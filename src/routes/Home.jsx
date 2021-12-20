/** @format */
// import { Link } from 'react-router-dom';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';
import { usePlayers } from '../data/PlayerProvider';

const Home = () => {
    const playerList = usePlayers();
    return (
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
                                    }}
                                >
                                    {player.name}
                                </div>
                                <div className='balance'>$ 4900</div>
                                <div className='action-btns'>
                                    <button
                                        className='btn'
                                        style={{
                                            backgroundColor: `${player.color}`,
                                        }}
                                    >
                                        <IoAddCircleOutline className='btn-icon' />
                                    </button>
                                    <button
                                        className='btn'
                                        style={{
                                            backgroundColor: `${player.color}`,
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
        </div>
    );
};

export default Home;
