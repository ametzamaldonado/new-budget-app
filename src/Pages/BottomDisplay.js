import React from "react";
import axios from "axios";
// icons
import { useNavigate, Link } from "react-router-dom";
import { BiEdit } from 'react-icons/bi'
import { MdDeleteForever } from 'react-icons/md'
// css
import "./BottomDisplay.css";

const API = 'https://budget-app-api-sample-data.onrender.com';
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function BottomDisplay({ transactions, toggleChoice, incomeTotal, expenseTotal }) {
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
            return 'show-entry-tr'
        } else if (option === 'all') {
            return 'show-entry-tr'
        } else {
            return 'hide-entry-tr'
        }
    }

    const handleDelete = (index) => {
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
        <div className='dashboard-table-container p-2'>
            <h2 className="display-title">Dashboard</h2>
            {
                <table className="table table-display table-hover ">
                    <thead>        
                    <tr className="center-content">
                        <th scope="col">Date</th>
                        <th scope="col">Label</th>
                        <th scope="col">From</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody id={`show`} >
                        {transactions.map((entry, i) => {
                            return (
                                <tr className={sortList(entry)} >
                                    <th id='small-col' scope="row">{getDate(entry)}</th>
                                    <td id='med-col' scope="row">{entry.item_name}</td>
                                    <td id='med-col' scope="row">{entry.from}</td>
                                    <td id='med-col' scope="row">${entry.amount}</td>
                                    <td id='med-col' scope="row">
                                        <Link to={`/transactions/${i}`}><BiEdit /></Link>
                                        <button className="no-properties" value={i} onClick={e => handleDelete(i)} >
                                            <MdDeleteForever />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>
            }

        </div>
    )
}

export default BottomDisplay