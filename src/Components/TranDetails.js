import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './TranDetails.css';

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const API = 'https://budget-app-api-sample-data.onrender.com';

function TranDetails() {

    const [transaction, setTransaction] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
            .then((res) => setTransaction(res.data))
            .catch((err) => navigate(`/404`))
    }, [index, navigate]);

    // Date features //
    const dateEntered = new Date(transaction.date);
    const month = dateEntered.getMonth();
    const day = dateEntered.getDate() + 1;
    const year = dateEntered.getFullYear();
    //   ------------------//
    return (
        <div className='show-card-outter edit-column'>
            <div className="inner-show-card" >
                <div className="inner-card-body">
                    <h5 className="inner-card-title">Expense Title: <span>{transaction.item_name}</span></h5>
                    <p className="inner-card-text">
                        <span>From: </span>{transaction.from}
                        <br />
                        <span>Amount: </span>${transaction.amount}
                        <br />
                        <span>Date: </span>{`${monthNames[month]} ${day}, ${year}`}
                        <br />
                        <span>Category: </span>{transaction.category}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default TranDetails