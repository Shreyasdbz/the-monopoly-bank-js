/** @format */

import { useState, createContext, useContext } from 'react';

import {
    initial_player_data,
    player_data_a,
    player_data_b,
} from './initalData';

// CONTEXTS FOR INTERNAL SETUP  ------------------------

const PlayerContext = createContext();
const PlayerUpdateContext = createContext();
const PlayerAddContext = createContext();
const PlayerRemoveContext = createContext();
const PlayerTransactionContext = createContext();

// EXPORTS FOR EXTERNAL USE ------------------------

export function usePlayers() {
    return useContext(PlayerContext);
}
export function usePlayersUpdate() {
    return useContext(PlayerUpdateContext);
}
export function usePlayerAddContext() {
    return useContext(PlayerAddContext);
}
export function usePlayerRemoveContext() {
    return useContext(PlayerRemoveContext);
}
export function usePlayerTransactionContext() {
    return useContext(PlayerTransactionContext);
}

// PRIMARY PROVIDER COMPONENT ------------------------
// Player list / obj format:
// [
// {
// name: str
// balance: 0
// }, {...}
// ]
export function PlayerProvider({ children }) {
    const [playerList, set_playerList] = useState(initial_player_data);

    function setPlayerData_custom(ltr) {
        if (ltr === 'a') set_playerList(player_data_a);
        else if (ltr === 'b') set_playerList(player_data_b);
    }

    function add_new_player(player_name) {
        //
    }
    function remove_player(player_name) {
        //
    }
    function make_transaction(player_name, amount, type) {
        //
    }

    return (
        <PlayerContext.Provider value={playerList}>
            <PlayerUpdateContext.Provider value={setPlayerData_custom}>
                <PlayerAddContext.Provider value={add_new_player}>
                    <PlayerRemoveContext.Provider value={remove_player}>
                        <PlayerTransactionContext.Provider
                            value={make_transaction}
                        >
                            {children}
                        </PlayerTransactionContext.Provider>
                    </PlayerRemoveContext.Provider>
                </PlayerAddContext.Provider>
            </PlayerUpdateContext.Provider>
        </PlayerContext.Provider>
    );
}
