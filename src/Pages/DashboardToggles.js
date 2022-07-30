import React from 'react';
import "./DashboardToggles.css";

function DashboardToggles({ setToggleChoice}) {

  const handleToggle = (e) => {
    const chosen = e.target.id
    const toggleOptions = ['expTog', 'incTog', 'allTog'];
    const notChoosenTogg = toggleOptions.filter(el => el !== chosen)

    // ------------------------- Highlights option selected -------------------------- //
    /* resource for 'active' toggle => https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element--> */
    document.getElementById(chosen).classList.add('active')
    notChoosenTogg.forEach(el => document.getElementById(el).classList.remove('active'))
    // ------------------------------------------------------------------------------- //
    setToggleChoice(chosen)
  }
  
    return (
        <>
            <div className="budget-display">
                <h2 className="display-title">Dashboard</h2>
                <div className="display-options">
                    <div id="expTog" onClick={handleToggle}>Expenses</div>
                    <div id="incTog" onClick={handleToggle}>Income</div>
                    <div id="allTog" onClick={handleToggle} className='active'>All</div>
                </div>
            </div>
        </>
    )
}

export default DashboardToggles