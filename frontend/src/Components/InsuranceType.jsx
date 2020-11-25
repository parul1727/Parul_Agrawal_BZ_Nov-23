import React, { useState } from 'react';
import PageHeader from "./Common/PageHeader";
import PageFooter from "./Common/PageFooter";
import Umbrella from "../icons/Umbrella";

function InsuranceType(props) {
    const info = [
        { icon: <Umbrella/>, top: 'Professional Liability', bottom: 'Errors & Omissions (E&O insurance)' },
        { icon: <Umbrella/>, top: 'General Liability', bottom: 'Help mitigate against loss (CGL insurance)' },
        { icon: <Umbrella/>, top: 'Business Owner’s Policy', bottom: 'The complete package (BOP)' },
        { icon: <Umbrella/>, top: 'Cyber', bottom: 'Internet-bsed risks (CLIC)' }
    ];

    function moveToNext() {
        props.history.push("/business-name");
    }

    function moveToPrev() {
        props.history.push("/");
    }
    return (
        <>
            <div className='page insurance'>
                <PageHeader step='1' text='What type of insurance are you looking for?' />
                <div className='page-content'>
                    {info.map((curr, ii) => (
                        <div className='box' key={`${curr.top}_${ii}`}>
                            {curr.icon}
                            <div className='info'>
                                <div className='top'>{curr.top}</div>
                                <div className='bottom'>{curr.bottom}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <PageHeader step='2' text='What’s the name of your business?' className='footer'/>
                <div className='divider' />
            </div>
            <PageFooter step='1' totalSteps='7' moveToPrev={moveToPrev} moveToNext={moveToNext}/>
        </>
    )
}

export default InsuranceType;
