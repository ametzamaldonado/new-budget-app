import React from 'react';
import "./TopDisplay.css";
import { Link } from 'react-router-dom';



function TopDisplay({ incomeTotal, setIncomeTotal, expenseTotal, setExpenseTotal, transactions }) {

  const calculateIncome = () => {
    let total = 0;
    transactions.map(e => e.category === 'Income' ? total += Number(e.amount) : total += 0)
    setIncomeTotal(total)
  }

  const calculateExpenses = () => {
    let total = 0;
    transactions.map(e => e.category === 'Expense' ? total += Number(e.amount) : total += 0)
    setExpenseTotal(total)
  }

  calculateIncome()
  calculateExpenses()
  const totalColor = () => {
    const balance = (Number(incomeTotal) + Number(expenseTotal)).toFixed(2);
    if (balance >= 1000) {
      return <span className='color-total-green'>{balance}</span>
    } else if (0 <= balance && balance < 1000) {
      return <span className='color-total-neutral'>{balance}</span>
    } else if (balance < 0) {
      return <span className='color-total-red'>{balance}</span>
    }
  }

  return (
    <>
      <h1 className="app-title font-effect-neon"> <Link to='/transactions'>simplyBugeting</Link></h1>
      <div className="app-header">
        <div className="total"> Balance: ${totalColor()}
        </div>
        <div className="account-info">
          <div className="income">
            <div className="income-title">Income: $<span className="income-total">{incomeTotal.toFixed(2)}</span></div>
          </div>
          <div className="expenses">
            <div className="expenses-title">Expenses: $<span className="expenses-total">{expenseTotal.toFixed(2)}</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopDisplay