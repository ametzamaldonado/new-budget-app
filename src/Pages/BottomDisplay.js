import "./BottomDisplay.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = 'https://budget-app-api-sample-data.herokuapp.com';
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function BottomDisplay({ transactions, toggleChoice }) {
    const navigate = useNavigate();
    let option;
    switch (toggleChoice) {
        case 'expTog':
            option = 'Expense';
            break;
        case 'incTog':
            option = 'Income';
            break;
        default:
            option = 'all';
    }

    const sortList = (entry) => {
        if (option === entry.category) {
            return 'show-entry-ul'
        } else if (option === 'all') {
            return 'show-entry-ul'
        } else {
            return 'hide-entry-ul'
        }
    }

    const handleDelete = (e) => {
        const index = e.target.value
        axios.delete(`${API}/transactions/${index}`)
            .then(res => navigate(`/transactions`))
            .catch(err => navigate(`/404`))
    };

    const getDate = (tran) => {
        // Date features //
        const dateEntered = new Date(tran.date);
        const month = dateEntered.getMonth();
        const day = dateEntered.getDate() + 1;
        const year = dateEntered.getFullYear();
        return `${monthNames[month]} ${day}, ${year}`
        //   ------------------//
    }

    return (
        <div className='dashboard-display-container'>
            {transactions.map((entry, i) => {
                return (
                    <div id={`show`} key={i} className={sortList(entry)}>
                        <ul className={`${entry.category}-ul`}>
                            <li className='list'>
                                <div className="entry">
                                    <h4>{entry.item_name} - ${entry.amount}
                                        <br />
                                        From: {entry.from}
                                    </h4>
                                    <h6>Amount posted on {getDate(entry)}</h6>
                                </div>
                                <div className='show-card-options'>
                                    <button className="edit" value={i}><Link to={`/transactions/${i}`}>✏️</Link></button>
                                    <button className="delete" value={i} onClick={e => handleDelete(e)}>🗑️</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                )
            })}
            <div className='new-expense-btnContainer'>
                <Link to="/transactions/new">
                    <button className='content__button'>New Expense</button>
                </Link>
            </div>

        </div>

    )
}

export default BottomDisplay