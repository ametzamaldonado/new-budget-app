import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";

const API = process.env.REACT_APP_API;

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

    const handleSubmit = (event) => {
        event.preventDefault();
        addTranEntry();
    };

    return (
        <div className="container p-4">
            <Form transaction={transaction} setValue={setValue} setTransaction={setTransaction} handleSubmit={handleSubmit} />
        </div>
    )
}

export default TranAdd