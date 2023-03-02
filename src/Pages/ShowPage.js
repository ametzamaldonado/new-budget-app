import React from 'react';
import { TranDetails, TranEdit } from '../Components';
import { BiArrowBack } from 'react-icons/bi';

function ShowPage() {
  return (
  <>

    <div className='show-page'>
        <TranDetails />
        <TranEdit />
        
    </div>
    <div className='d-flex justify-content-center'>
            <a href='/' className='btn btn-outline-primary'><BiArrowBack /> Back To Transactions</a>

    </div>
    </>
  )
}

export default ShowPage