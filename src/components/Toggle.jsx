import React from 'react'
import { useState } from 'react';


export const Toggle = ({title, children}) => {

const [modal, setModal] = useState(false);
 
const toggleModal =  () => { 
    setModal(!modal);
}

  return (
    <div>
    <h1  className='btn-modal' onClick={toggleModal}>
        {title}
    </h1>

    {modal && (
    <div className='modal'>
        <div className='overlay'></div>
        <div className='modal-content'>
            {children}
            <div className='btn-modal' onClick={toggleModal}></div>
        </div>
    </div>
    )}


</div>
  )
}
