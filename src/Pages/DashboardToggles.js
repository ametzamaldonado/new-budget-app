import React from 'react';
import "./DashboardToggles.css";

function DashboardToggles({ setToggleChoice }) {

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
                <div className="row separate-components grid-sortedDisplay">
                    <h5 className='text-muted'>Sort Entries</h5>
                    <ul className="display-options list-unstyled">
                    <li id="expTog" onClick={handleToggle}>EXPENSES</li>
                    <li id="incTog" onClick={handleToggle}>INCOME</li>
                    <li id="allTog" onClick={handleToggle} className='active'>ALL</li>
                    </ul>
                </div>
                <div className="row grid-otherDisplay">
                    <h5 className='text-muted'>Other</h5>
                    <ul className="display-options list-unstyled">
                        <li>
                            <a href="/transactions/new">ADD ENTRY</a>
                        </li>
                    </ul>
                </div>
        </>
    )
}

export default DashboardToggles