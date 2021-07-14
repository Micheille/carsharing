import React from 'react';
import { Route } from 'react-router';

import LocationStepContainer from '../LocationStepContainer';
import ModelStepContainer from '../ModelStepContainer';
import ExtrasStepContainer from '../ExtrasStepContainer';
import TotalStepContainer from '../TotalStepContainer';
import Overall from '../Overall';

import './style.scss';

export default function OrderProcessContent({ activeStep, setActiveStep }) {
  return (
    <div className='order-process-content'>
      <Route
        path='/order/location'
        render={(props) => <LocationStepContainer />}
      />
      <Route path='/order/model' component={ModelStepContainer} />
      <Route path='/order/extra' component={ExtrasStepContainer} />
      <Route path='/order/total' component={TotalStepContainer} />

      <div className='order-process-content__overall'>
        <Overall activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
    </div>
  );
}
