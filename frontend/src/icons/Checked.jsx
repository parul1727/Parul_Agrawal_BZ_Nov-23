/* Copyright (c) 2019 Honeywell - North Vancouver, BC, Canada */
import React from 'react';

const Checked = (props) => (
  <div className={`icon ${props.className || ''}`}>
    <svg width='24' height='24' viewBox='0 0 24 24'>
      <path d='M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z' />
    </svg>
  </div>
);

export default Checked;

