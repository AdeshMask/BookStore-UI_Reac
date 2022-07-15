import React from 'react'
import './OrderSuccessPage.css'
import { Link } from 'react-router-dom';

function OrderSuccessPage() {
    return (
        <div>

            <div className="card">
                <div className="card-content">
                    <i className="checkmark">✓</i>
                </div>
                <h1>Placed Successfully</h1>
                <p>We received your purchase request on ID --<br /> we'll be in touch shortly!</p>
                <Link to='/home'>cleck here</Link><p>to continue</p>
            </div>
        </div>
    )
}

export default OrderSuccessPage