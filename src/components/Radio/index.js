import React from 'react';

import './style.scss';

export default function Radio({ ...props }) {
  return (
    <>
      <input className='radio' {...props} />
      <label className='label' htmlFor={props.id}>
        {props.id}
      </label>
    </>
  );
}
