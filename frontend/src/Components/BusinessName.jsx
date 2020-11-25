import React, { useState } from 'react';
import PageHeader from "./Common/PageHeader";
import Close from "../icons/Close";
import PageFooter from "./Common/PageFooter";

function BusinessName(props) {
    function moveToNext() {
        props.history.push("/");
    }

    function moveToPrev() {
        props.history.push("/insurance-type");
    }
    return (
        <>
            <div className='page business-name'>
                <PageHeader step='2' text='What’s the name of your business?' />
                <div className='page-content'>
                    <input type='text' className='business-name' />
                    <button type='button'>OK</button>
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
