import React from 'react';
import Down from "../../icons/Down";

function PageFooter(props) {
    return (
        <div className='page-footer'>
            <div className='left'>{props.step}/{props.totalSteps}</div>
            <div className='right'>
                <button type='button' onClick={props.moveToPrev}><Down className='up' /></button>
                <button type='button' onClick={props.moveToNext}><Down /></button>
            </div>
        </div>
    )
}

export default PageFooter;
