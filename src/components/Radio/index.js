import React from 'react';

import './style.scss';

export default function Radio({ ...props }) {
  return (
    <>
      <input className='radio' type='radio' {...props} />
      <label className='label' htmlFor={props.id}>
        {props.text}
      </label>
    </>
  );
}
