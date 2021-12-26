/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

export default function ResetDataPopUp({ handleResetConfirmation }) {
    return (
        <div className='reset-confirmation-container'>
            <div className='box'>
                <h4 className='title'>Reset All Data</h4>
                <div className='caption'>
                    Are you sure you want to reset all player information and
                    return home?
                </div>
                <div className='action-btns'>
                    <Link to='/'>
                        <button
                            className='btn yes'
                            onClick={() => {
                                handleResetConfirmation('YES');
                            }}
                        >
                            Yes
                        </button>
                    </Link>
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
    );
}
