import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import RequestForm from './RequestForm';

function SaveModalRequest() {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <>
        <button onClick={() => setShowModal(true)}>Log In</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <RequestForm setShowModal={setShowModal} />
          </Modal>
        )}
      </>
    );
  }
  
  export default SaveModalRequest;