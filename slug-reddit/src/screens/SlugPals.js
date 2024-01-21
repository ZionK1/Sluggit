import React, { useState } from "react";
import Modal from "react-modal";

const SlugPals = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (title) => {
    setModalTitle(title);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h2>Meet Your Slug Pals</h2>
      <p>This is the content for the Slug Pals page.</p>
      <button onClick={() => openModal("Hiking")}>{modalTitle || "Click me"}</button>
      <button onClick={() => openModal("Gym")}>{modalTitle || "Click me"}</button>
      <button onClick={() => openModal("Games")}>{modalTitle || "Click me"}</button>
      <button onClick={() => openModal("Date with michael")}>{modalTitle || "Click me"}</button>


      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h3>{modalTitle}</h3>
        <p>Modal content goes here.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default SlugPals;