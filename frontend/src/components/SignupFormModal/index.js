import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from './SignupForm';

function SignupFormModal({onClose}){
    const [showModal, setShowModal] = useState(false);

    const check = () =>{
      if(onClose){
        // debugger
        return onClose
      } else{
        return () => setShowModal(false)
      }
    }

    return (
        <>
          <button onClick={() => setShowModal(true)}>Sign Up</button>
          {showModal && (
            <Modal onClose={check()}>
              <SignupForm />
            </Modal>
          )}
        </>
      );
}

export default SignupFormModal;