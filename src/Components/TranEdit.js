import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form"
import "./TranEdit.css"


const API = process.env.REACT_APP_API

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

    const updateTranEntry = () => {
        axios.put(`${API}/transactions/${index}`, transaction)
            .then(res => {
                setTransaction(res.data)
                window.location.reload();
                // navigate(`/transactions/${index}`)
            })
            .catch((err) => navigate(`/404`))
    }

    const handleSubmitEdit = (event) => {
        event.preventDefault();
        updateTranEntry();
    };

    return (
        <div className="edit-column">
            <Form transaction={transaction} setTransaction={setTransaction} setValue={setValue} handleSubmit={handleSubmitEdit}/>
        </div>
    );
}

export default TranEdit