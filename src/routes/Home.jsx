/** @format */
// import { Link } from 'react-router-dom';
import { usePlayers } from '../data/PlayerProvider';

const Home = () => {
    const playerList = usePlayers();
    return (
        <div className='home'>
            <div className='header'>
                <h2>The Monopoly Bank</h2>
            </div>
            <div className='main'>
                <div className='player-list-box'>
                    <h3>Players:</h3>
                    <div className='player-list'>
                        {playerList.map((player) => {
                            return (
                                <button className='player' key={player.id}>
                                    <div
                                        className='name'
                                        style={{
                                            backgroundColor: `${player.color}`,
                                        }}
                                    >
                                        {player.name}
                                    </div>
                                    <div className='balance'>
                                        {player.balance}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='transaction-list-box'>
                    <h3>Transactions:</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
