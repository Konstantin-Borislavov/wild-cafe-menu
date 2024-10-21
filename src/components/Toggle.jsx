import React, { useState, useRef, useEffect } from "react";
import "../css/toggle.css";

export const Toggle = ({ title, children }) => {
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    window.scrollBy(0, -10);
    if (modal) {
      setModal(false);
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    } else {
      setShowModal(true);
      setTimeout(() => {
        setModal(true);
      }, 10);
    }
  };

  return (
    <div>
      <h1 className="btn-modal" onClick={toggleModal}>
        {title}
      </h1>

      {showModal && (
        <div
          className={`modal-content ${modal ? "modal-open" : "modal-close"}`}
        >
          {children}
          <button onClick={toggleModal} className="close-button">
            <img src={"/close-button.png"} alt="Cerrar" />
          </button>
        </div>
      )}
    </div>
  );
};
