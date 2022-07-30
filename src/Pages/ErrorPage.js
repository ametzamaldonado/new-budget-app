import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function ErrorPage() {
    return (
        <div className='error'>
            <h1>Sorry, no page found</h1>
            <h1>(⊙︿⊙✿)</h1>
            <button><Link to={`/transactions`}>Go Home?</Link></button>
        </div>
    )
}

export default ErrorPage