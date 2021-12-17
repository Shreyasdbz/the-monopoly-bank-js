/** @format */
import './style/main.css';

import { Routes, Route } from 'react-router-dom';

import { PlayerProvider } from './data/PlayerProvider';
import Landing from './routes/Landing';
import Home from './routes/Home';
import SiteInfo from './routes/SiteInfo';

function App() {
    return (
        <PlayerProvider>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='Home' element={<Home />} />
                <Route path='SiteInfo' element={<SiteInfo />} />
            </Routes>
        </PlayerProvider>
    );
}

export default App;
