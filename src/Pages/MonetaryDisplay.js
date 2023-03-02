import React from 'react';
import "./MonetaryDisplay.css";

function MonetaryDisplay({ incomeTotal, setIncomeTotal, expenseTotal, setExpenseTotal, transactions }) {

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
    <div className='container justify-content-center monetary-container'>
      <div className="top_budgetCards">

        <div className="container card-container">
          {/* Balance */}
          <div className="card blue">
            <div className="card-body">
              <h5>BALANCE: </h5>
              <h3>${totalColor()}</h3>
            </div>
          </div>


          {/* Income */}
          <div className="card green">
            <div className="card-body">
            <h5>INCOME: </h5>
              <h3>$<span className="income-total">{incomeTotal.toFixed(2)}</span></h3>
            </div>
          </div>

          {/* Expense */}
          <div className="card red">
            <div className="card-body">
            <h5>EXPENSES: </h5>
              <h3>$<span className="expenses-total">{expenseTotal.toFixed(2)}</span></h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MonetaryDisplay