import React, { useState, useRef, useEffect } from 'react';
import '../css/toggle.css';

export const Toggle = ({ title, children }) => {
  const [modal, setModal] = useState(false);
  const [height, setHeight] = useState(0);
  const modalContentRef = useRef(null);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (modal && modalContentRef.current) {
      const contentHeight = modalContentRef.current.scrollHeight;
      setHeight(contentHeight);
    }
  }, [modal]);

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.style.setProperty('--height', `${height}px`);
    }
  }, [height]);

  return (
    <div>
      <h1 className='btn-modal' onClick={toggleModal}>
        {title}
      </h1>

      <div ref={modalContentRef} className={`modal-content ${modal ? 'open' : 'close'}`}>
        {children}
        <button onClick={toggleModal}>Close</button>
      </div>
    </div>
  );
};

