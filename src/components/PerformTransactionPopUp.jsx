/** @format */

import React from 'react';

export default function PerformTransactionPopUp({
    currentAction,
    currentPlayer,
    currentTransactionAmount,
    set_currentTransactionAmount,
    handleTransaction,
    handleTransactionPopUp,
}) {
    return (
        <div className='transaction-popUp-container'>
            <div className='box'>
                <div className='header'>
                    <span className='text'>Enter amount to</span>
                    <span
                        className={`action ${
                            currentAction === 'ADD'
                                ? 'add-action'
                                : 'remove-action'
                        }`}
                    >
                        {currentAction.toLowerCase()}
                    </span>
                    <span className='text'>for</span>
                    <span
                        className='name'
                        style={{
                            color: `${currentPlayer.color}`,
                        }}
                    >
                        {currentPlayer.name}
                    </span>
                </div>
                <div className='input-box'>
                    <span className='dollar-sign'>$</span>
                    <input
                        type='text'
                        className='amount-input'
                        value={currentTransactionAmount}
                        onChange={(e) =>
                            set_currentTransactionAmount(e.target.value)
                        }
                    />
                </div>
                <div className='action-btns'>
                    <button
                        className={`btn ${
                            currentAction === 'ADD' ? 'add-btn' : 'remove-btn'
                        }`}
                        onClick={handleTransaction}
                    >
                        {currentAction}
                    </button>
                    <button
                        className='btn cancel-btn'
                        onClick={() => {
                            handleTransactionPopUp('CANCEL');
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
