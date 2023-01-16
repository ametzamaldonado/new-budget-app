import { useNavigate } from "react-router-dom";
import { useState, React } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const API = 'https://budget-app-api-sample-data.onrender.com';

function TranAdd() {
    const [value, setValue] = useState('');
    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: value,
    });

    const navigate = useNavigate();

    const addTranEntry = () => {
        axios.post(`${API}/transactions`, transaction)
            .then(() => navigate("/transactions"))
            .catch((err) => navigate(`/404`))
    }

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleOptionChange = (e) => {
        console.log(e.target.value)
        setValue(e.target.value);
        setTransaction({ ...transaction, category: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addTranEntry();
    };

    return (
        <>
            <div className="New">
                <br />
                <form className='entry-form' onSubmit={handleSubmit}>
                    <label htmlFor="item_name">
                        <span className='entry-title'>Item Name <span className="required">*</span></span>
                        <input
                            id="item_name"
                            value={transaction.item_name}
                            type="text"
                            onChange={handleTextChange}
                            placeholder="Enter Expense Item..."
                            required
                        />
                    </label>


                    <label htmlFor="entry_date">
                        <span className='entry-title'>Date <span className="required">*</span></span>
                        <input
                            id="date"
                            type="date"
                            min="2019-01-01"
                            max="2023-12-31"
                            value={transaction.date}
                            onChange={handleTextChange}
                            required
                        />
                    </label>

                    <label htmlFor="amount">
                        <span className='entry-title'>Amount <span className="required">*</span></span>
                        <input
                            id="amount"
                            type="number"
                            required
                            value={transaction.amount}
                            onChange={handleTextChange}
                        />
                    </label>

                    <label htmlFor="category">
                        <span className='entry-title'>Category <span className="required">*</span></span>
                        <select className="category-dropdown" id='category' onChange={handleOptionChange}>
                            <option value=''>Pick Option</option>
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </label>

                    <label htmlFor="from">
                        <span className='entry-title'>From <span className="required">*</span></span>
                        <input
                            id="from"
                            value={transaction.from}
                            type="text"
                            onChange={handleTextChange}
                            required
                        />
                    </label>
                    <div className="showNavigation-buttons">
                        <button type="submit">Submit</button>
                        <Link to="/transactions"><button>Nevermind!</button></Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default TranAdd