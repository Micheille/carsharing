import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from '../Navigation';
import OrderProcessContent from '../OrderProcessContent';
import { setOrderId } from '../../../store/order/actions';

import './style.scss';

function OrderProcess(props) {
  const { orderId, setOrderId } = props;

  const [activeStep, setActiveStep] = useState(0);
  const { urlOrderId } = useParams();

  useEffect(() => {
    if (urlOrderId) {
      setOrderId(urlOrderId);
      setActiveStep(4);
    }
  }, [urlOrderId]);

  return (
    <div className='order-process'>
      <Navigation
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        orderId={orderId}
      />

      <div className='order-process__content'>
        <OrderProcessContent
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    orderId: state.order.id,
  };
};

const mapDispatchToProps = {
  setOrderId,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderProcess);
