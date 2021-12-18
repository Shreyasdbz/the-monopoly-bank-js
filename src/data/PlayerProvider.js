/** @format */

import { useState, createContext, useContext } from 'react';

import { initial_player_data } from './initalData';

// CONTEXTS FOR INTERNAL SETUP  ------------------------

const PlayerContext = createContext();
const PlayerAddContext = createContext();
const PlayerRemoveContext = createContext();
const PlayerTransactionContext = createContext();
const PlayerInitiatecontext = createContext();

// EXPORTS FOR EXTERNAL USE ------------------------

export function usePlayers() {
    return useContext(PlayerContext);
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
export function usePlayerInitiateContext() {
    return useContext(PlayerInitiatecontext);
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

    function add_new_player(player_name) {
        //
    }
    function remove_player(player_name) {
        //
    }
    function make_transaction(player_name, amount, type) {
        //
    }
    function initiate_player_list(playerList) {
        set_playerList(playerList);
    }

    return (
        <PlayerContext.Provider value={playerList}>
            <PlayerAddContext.Provider value={add_new_player}>
                <PlayerRemoveContext.Provider value={remove_player}>
                    <PlayerTransactionContext.Provider value={make_transaction}>
                        <PlayerInitiatecontext.Provider
                            value={initiate_player_list}
                        >
                            {children}
                        </PlayerInitiatecontext.Provider>
                    </PlayerTransactionContext.Provider>
                </PlayerRemoveContext.Provider>
            </PlayerAddContext.Provider>
        </PlayerContext.Provider>
    );
}
