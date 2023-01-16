import { useState, useEffect, React } from "react";
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

    const handleDelete = () => {
        axios.delete(`${API}/transactions/${index}`) // deletes
            .then(res => navigate(`/transactions`))
            .catch(err => navigate(`/404`))
    };
    // Date features //
    const dateEntered = new Date(transaction.date);
    const month = dateEntered.getMonth();
    const day = dateEntered.getDate() + 1;
    const year = dateEntered.getFullYear();
    //   ------------------//
    return (
        <div className='show-card-outter'>
            <div className='card-inner'>
                <h2>
                    <span>Expense Title: </span>{transaction.item_name}</h2>
                <h3>
                    <span>From: </span>{transaction.from}
                </h3>
                <h3>
                    <span>Amount: </span>${transaction.amount}
                </h3>
                <h3>
                    <span>Date: </span>{`${monthNames[month]} ${day}, ${year}`}
                </h3>
                <h3><span>Category: </span>{transaction.category}</h3>
            </div>

            <div className="showNavigation-buttons">
                <div>
                    <Link to={`/transactions`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/transactions/${index}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default TranDetails