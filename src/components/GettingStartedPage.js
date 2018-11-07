import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app')

export const GettingStartedPage = (props) => (
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
                <p>Tier List Maker lets you create your own "tier list" using the S to F grading system used in Japan and popularized by today's video game culture.</p>
                <br></br>
                <p>S is the highest grade while F is the Lowest.</p>
                <br></br>
                <h2>S <i className="fas fa-greater-than"></i> A <i className="fas fa-greater-than"></i> B <i className="fas fa-greater-than"></i> C <i className="fas fa-greater-than"></i> D <i className="fas fa-greater-than"></i> F</h2>
                <br></br>
                <p>A tierlist is a list of playable elements in a videogame, subjectively ranked by their respective viability in a high level competivie setting.</p>
                <br></br>
                <p>You could view other user's tier list in the "Tier List" Column.</p> <h2><i className="fas fa-bars"></i></h2>
                <br></br>
                <p>Once you login via google account, you can create your own tier list by clicking the "Create Tier List" button.</p><h2><i className="fas fa-plus-circle"></i> </h2>
                <br></br>
                <p>You can use other users tier list by clicking on any of the tier list in the "Templates" column.</p><h2><i className="fas fa-th-large"></i></h2>
                <br></br>
                <p>Sign in to get started!</p>
                <br></br>
                <p>Test Login Username: testpenguin555111@gmail.com --- Test Login Password: googleyes999</p>
                <br></br>
                </div>
            </Modal>
    </div>
)
