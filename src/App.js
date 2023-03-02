import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

// Pages
import { MonetaryDisplay, BottomDisplay, ErrorPage, Loading, TopPageDisplay, ShowPage } from "./Pages/index"

// Components
import { TranDetails, TranEdit, TranAdd } from "./Components/index"

const API = process.env.REACT_APP_API;

function App() {
  const [toggleChoice, setToggleChoice] = useState('allTog')
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [transactions, setTransactions] = useState([]);

  const [loaded, setDoneLoading] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      axios.get(`${API}/transactions`)
        .then((response) => {
          setTransactions(response.data);
          setDoneLoading(true);
        });
    }, 2000);
  }, [transactions]);

  return (
    <>
      <div className="App">

        <TopPageDisplay setToggleChoice={setToggleChoice} />
        <main>
          <Router>
            <MonetaryDisplay
              incomeTotal={incomeTotal}
              setIncomeTotal={setIncomeTotal}
              expenseTotal={expenseTotal}
              setExpenseTotal={setExpenseTotal}
              transactions={transactions}
            />
            {
              !loaded ?
                (
                  <Loading />
                ) :
                (
                  <Routes>
                    <Route path="/" element={<BottomDisplay transactions={transactions} toggleChoice={toggleChoice} incomeTotal={incomeTotal} expenseTotal={expenseTotal} />} />
                    <Route path="/transactions" element={<BottomDisplay transactions={transactions} toggleChoice={toggleChoice} />} />
                    <Route path="/transactions/:index" element={ <ShowPage /> } />
                    <Route path="/transactions/new" element={<TranAdd />} />
                    <Route path="/404" element={<ErrorPage />} />
                  </Routes>
                )
            }
          </Router>
        </main>
      </div>
    </>
  );
}
export default App;

