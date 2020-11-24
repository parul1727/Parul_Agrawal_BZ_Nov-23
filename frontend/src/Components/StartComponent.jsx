import React, { useState } from 'react';
import Modal from "./Widgets/Modal";

function StartComponent() {
    const [open, setOpen] = useState(true);

    return (
        <div className='start-container'>
            <Modal
                open={open}
                hideModal={() => setOpen(false)}
                showCloseIcon
            >
                <>
                    <i className='circle-blue'></i>
                    <h2>So what gives?</h2>
                    <div className='list'>
                        <div className='list-item'>
                            <div className='circle-blue'>1</div>
                            <div>Answer a few simple questions about your business</div>
                        </div>
                        <div className='list-item'>
                            <div className='circle-blue'>2</div>
                            <div>Browse through specially curated quotes</div>
                        </div>
                        <div className='list-item'>
                            <div className='circle-blue'>3</div>
                            <div>Select your quote-of-choice and receive your policy instantly</div>
                        </div>
                    </div>
                    <button className='green start-btn' type='button'>Get Started</button>
                </>
            </Modal>
        </div>
    )
}

export default StartComponent;
