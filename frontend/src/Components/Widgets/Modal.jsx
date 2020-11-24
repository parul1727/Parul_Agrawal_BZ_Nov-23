/* Copyright (c) 2019 Honeywell - North Vancouver, BC, Canada */
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React from 'react';
import Close from '../../icons/Close';

const Modal = (props) => (
  <>
    {props.open && <div className='background-overlay' />}
    <div className={`modal ${props.open ? 'show' : 'hide'} ${props.className || ''}`}>
      <div className='modal-header'>
        {props.header}
        <div className={`close-icon ${props.showCloseIcon ? '' : 'hide'}`} onClick={props.hideModal}>
          <Close />
        </div>
      </div>
      <div className='modal-body'>
        {props.children}
      </div>
      <div className='modal-footer'>
        {props.footer}
      </div>
    </div>
  </>
);

export default Modal;
