import React from 'react';

function PageHeader(props) {
    return (
        <div className={`page-header ${props.className || ''}`}>
            <div className='list'>
                <div className='list-item'>
                    <div className='circle-blue'>{props.step}</div>
                    <div className='large bold'>{props.text}</div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;
