import React, { useState } from 'react';
import PageHeader from "./Common/PageHeader";
import Close from "../icons/Close";
import PageFooter from "./Common/PageFooter";

function BusinessName(props) {
    const [bName, setBname] = useState('Hoop Heaven');
    const [error, setError] = useState(null);

    function handleValidation() {
        let formIsValid = true;
        let error = null;

        if (!bName || bName.length < 2) {
           formIsValid = false;
           error = !error ? "First Name is required" : "Minimum 2 characters";
        }
        if (bName && !bName.match(/^[a-zA-Z0-9\s]+$/i)) {
            formIsValid = false;
            error = "Only letters accepted";
        }
        setError(error);
        return formIsValid;
    }

    function moveToNext() {
        if(!error){
            props.history.push("/");
        }
    }

    function moveToPrev() {
        props.history.push("/insurance-type");
    }

    function handleChange(e) {
       setBname(e.target.value);
    }

    return (
        <>
            <div className='page business-name'>
                <PageHeader step='2' text='What’s the name of your business?' />
                <div className='page-content'>
                    <input type='text' className='business-name' value={bName} onChange={handleChange} />
                    <span className='error'>{error}</span>
                    <button type='button' onClick={handleValidation}>OK</button>
                </div>
                <PageHeader step='3' text='What’s the phone number?' className='footer'/>
                <div className='divider' />
                <PageHeader step='4' text='What state do you operate from?' className='footer step-4'/>
                <div className='divider step-4' />
            </div>
            <PageFooter step='2' totalSteps='7' moveToPrev={moveToPrev} moveToNext={moveToNext}/>
        </>
    )
}

export default BusinessName;
