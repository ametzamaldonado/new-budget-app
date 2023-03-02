import React from 'react'

export default function Form({ transaction, setValue, setTransaction, handleSubmit }) {
    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleOptionChange = (e) => {
        setValue(e.target.value);
        setTransaction({ ...transaction, category: e.target.value });
    };

  return (
    <>
    <form className="New mx-5" onSubmit={handleSubmit}>
            <div className='entry-form form-group' >
                <label htmlFor="item_name">Item Name </label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="item_name" 
                    placeholder="Enter Expense Item..." 
                    value={transaction.item_name} 
                    onChange={handleTextChange} 
                    required/>
            </div>
            <div className="form-group">
                <label htmlFor="entry_date">Date</label>
                    <input
                        id="date"
                        type="date"
                        class="form-control" 
                        min="2019-01-01"
                        max="2023-12-31"
                        value={transaction.date}
                        onChange={handleTextChange}
                        required
                    />
               
            </div>
            <div className="form-group">
                <label htmlFor="amount">Amount</label>
                    <input
                        id="amount"
                        type="number"
                        class="form-control" 
                        value={transaction.amount}
                        onChange={handleTextChange}
                        required
                    />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                    <select className="category-dropdown form-control" id='category' onChange={handleOptionChange} value={transaction.category}>
                        <option value=''>Pick Option</option>
                        <option value="Income">Income</option>
                        <option value="Expense">Expense</option>
                    </select>
                
            </div>
                
            <div className='entry-form form-group' onSubmit={handleSubmit}>
                <label htmlFor="from">From</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="from" 
                    placeholder="" 
                    value={transaction.from}
                    onChange={handleTextChange} 
                    required/>
            </div>    

                <div className="showNavigation-buttons">
                    <button type="submit"  class="btn btn-primary">Submit</button>
                    <button class="btn btn-danger"><a href="/transactions">Nevermind!</a></button>
                </div>  

        </form>
    </>
  )
}

