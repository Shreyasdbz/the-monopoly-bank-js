/** @format */
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='main'>This is HOME!!!</div>
            <Link to='/'>
                <div>Go to Landing</div>
            </Link>
        </div>
    );
};

export default Home;
