import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')

export const LoginSuccessful = (props) => (
    <div>
    <Modal 
            className="modal-overlay"
            contentLabel="getting-started"
            isOpen={props.modalIsOpen}
            onRequestClose={props.closeModal}
            >
                <div className="getting-started-container">
                    <button 
                    className="modal-button button"
                    onClick={props.closeModal}
                    >
                        <i className="fas fa-times-circle"></i>
                    </button>
                    <p>Login Successful!</p>
                </div>
            </Modal>
    </div>
)
