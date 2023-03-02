import React from 'react';
import DashboardToggles from './DashboardToggles';

function TopPageDisplay({ setToggleChoice }) {
    return (
        < >
            <div class="container-fluid d-flex justify-content-center header p-4">
                <a class="navbar-brand" href="/transactions"><h1 className="app-title">simplyBudgeting</h1></a>
            </div>
            <div className='budget-toggleContainer col'>
                <DashboardToggles setToggleChoice={setToggleChoice} />
            </div>
        </>
    )
}

export default TopPageDisplay