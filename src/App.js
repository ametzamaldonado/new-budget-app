import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import './App.css';

// Pages
import TopDisplay from './Pages/TopDisplay';
import BottomDisplay from './Pages/BottomDisplay';
import DashboardToggles from "./Pages/DashboardToggles";
import ErrorPage from "./Pages/ErrorPage";

// Components
import TranDetails from "./Components/TranDetails";
import TranEdit from "./Components/TranEdit";
import TranAdd from "./Components/TranAdd";

const API = 'https://budget-app-api-sample-data.onrender.com';

function App() {
  const [toggleChoice, setToggleChoice] = useState('allTog')
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${API}/transactions`) // fetches data from API that is running as well
      .then((res) => {
        setTransactions(res.data)
      })
      .catch((err) => { console.log(err) })
  }, [transactions])

  return (
    <>
    <div className="App">
      <Router>
        <TopDisplay 
        incomeTotal={incomeTotal} 
        setIncomeTotal={setIncomeTotal} 
        expenseTotal={expenseTotal}  
        setExpenseTotal={setExpenseTotal}
        transactions={transactions}
        />
        <DashboardToggles setToggleChoice={setToggleChoice} />
        <main>
          <Routes>
            <Route path="/" element={<BottomDisplay transactions={transactions} toggleChoice={toggleChoice} />} />
            <Route path="/transactions" element={<BottomDisplay transactions={transactions} toggleChoice={toggleChoice} />} />
            <Route path="/transactions/:index" element={<TranDetails />} />
            <Route path="/transactions/:index/edit" element={<TranEdit />} />
            <Route path="/transactions/new" element={<TranAdd />} />
            <Route path="/404" element={<ErrorPage />} />
          </Routes>  
        </main>
      </Router>
    </div>    
    </>
  );
}
export default App;

