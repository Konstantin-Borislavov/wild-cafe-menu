import React from 'react'
import { useState } from 'react';
import '../css/toggle.css'

export const Toggle = ({ title, children }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <h1 className='btn-modal' onClick={toggleModal}>
        Open
      </h1>

      <div className={`modal-content ${modal ? 'open' : 'close'}`}>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quos magnam eaque, cum tempore rem, veritatis hic harum provident eligendi numquam perferendis quibusdam quam error voluptas iusto dicta nisi magni?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quos magnam eaque, cum tempore rem, veritatis hic harum provident eligendi numquam perferendis quibusdam quam error voluptas iusto dicta nisi magni?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quos magnam eaque, cum tempore rem, veritatis hic harum provident eligendi numquam perferendis quibusdam quam error voluptas iusto dicta nisi magni?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quos magnam eaque, cum tempore rem, veritatis hic harum provident eligendi numquam perferendis quibusdam quam error voluptas iusto dicta nisi magni?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis quos magnam eaque, cum tempore rem, veritatis hic harum provident eligendi numquam perferendis quibusdam quam error voluptas iusto dicta nisi magni?</p>
        </div>
        <button onClick={toggleModal}>Close</button>
      </div>
    </div>
  );
};
