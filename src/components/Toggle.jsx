import React from 'react'
import { useState } from 'react';


export const Toggle = ({children}) => {

const [modal, setModal] = useState(false);
 
const toggleModal =  () => { 
    setModal(!modal);
}

  return (
    <div>
    <button  className='btn-modal' onClick={toggleModal}>
        Open
    </button>

    {modal && (
    <div className='modal'>
        <div className='overlay'></div>
        <div className='modal-content'>
            {children}
            <h2>Hello World</h2>
            <button  className='btn-modal' onClick={toggleModal}>
             Close
            </button>
        </div>
    </div>
    )}


</div>
  )
}
