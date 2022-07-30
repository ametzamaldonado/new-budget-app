import { useState, useEffect, React } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./TranEdit.css"
import axios from "axios";

const API = 'https://budget-app-api-sample-data.herokuapp.com';

function TranEdit() {

    let { index } = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const [transaction, setTransaction] = useState({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: value,
    });

    useEffect(() => {
        axios.get(`${API}/transactions/${index}`)
            .then(res => {
                setTransaction(res.data)
            })
            .catch(err => navigate('/404'))
    }, [index, navigate]);

    const handleTextChange = (e) => {
        setTransaction({ ...transaction, [e.target.id]: e.target.value });
    };

    const handleOptionChange = (e) => {
        setValue(e.target.value);
        setTransaction({ ...transaction, category: e.target.value });
    };

    
    const updateTranEntry = () => {
        axios.put(`${API}/transactions/${index}`, transaction)
            .then(res => {
                setTransaction(res.data)
                navigate(`/transactions/${index}`)
            })
            .catch((err) => navigate(`/404`))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(transaction)
        updateTranEntry();
    };

    return (
        <div className="Edit">
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
                        max="2022-12-31"
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
                    <select className="category-dropdown" id="category" value={transaction.category} onChange={handleOptionChange}>
                        <option value=''>Pick Option</option>
                        <option value="Income" >Income</option>
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

                <button type="submit">Submit</button>

                <button>
                    <Link to={`/transactions/${index}`}><span>Nevermind!</span></Link>
                </button>
            </form>
        </div>
    );
}

export default TranEdit