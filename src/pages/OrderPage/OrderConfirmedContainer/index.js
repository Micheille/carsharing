import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import TotalStep from '../TotalStep';
import { setOrderStatuses } from '../../../store/data/actions';
import {
  setCityData,
  setPointData,
  setCarData,
  setColor,
  setReservationFrom,
  setReservationTo,
  setRate,
  setIsFullTank,
  setHasBabySeat,
  setIsRightHand,
} from '../../../store/order/actions';

import { SERVER, HEADERS, DB_GET_ORDER } from '../../../components/App/api';

function OrderConfirmedContainer(props) {
  const {
    orderStatuses,
    setOrderStatuses,
    setCityData,
    setPointData,
    setCarData,
    setColor,
    setReservationFrom,
    setReservationTo,
    setRate,
    setIsFullTank,
    setHasBabySeat,
    setIsRightHand,
  } = props;

  const [error, setError] = useState('');
  const [orderData, setOrderData] = useState(null);
  const { urlOrderId } = useParams();

  useEffect(() => {
    let cleanupFunction = false;

    const getOrderData = async () => {
      const url = new URL(`${SERVER}${DB_GET_ORDER}${urlOrderId}`);
      const headers = HEADERS;
      const response = await fetch(url, { headers });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
      } else {
        const orderData = data.data;

        if (!cleanupFunction) {
          setOrderData(orderData);

          setCityData(orderData.cityId);
          setPointData(orderData.pointId);
          setCarData(orderData.carId);
          setColor(orderData.color);
          setReservationFrom(new Date(orderData.dateFrom));
          setReservationTo(new Date(orderData.dateTo));
          setRate(orderData.rateId);
          setIsFullTank(orderData.isFullTank);
          setHasBabySeat(orderData.isNeedChildChair);
          setIsRightHand(orderData.isRightWheel);
        }
      }
    };

    getOrderData();

    return () => (cleanupFunction = true);
  }, [urlOrderId]);

  return (
    <TotalStep
      carData={orderData?.carId}
      reservationFrom={new Date(orderData?.dateFrom)}
      orderStatuses={orderStatuses}
      setOrderStatuses={setOrderStatuses}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    orderStatuses: state.data.orderStatusesData,
  };
};

const mapDispatchToProps = {
  setOrderStatuses,
  setCityData,
  setPointData,
  setCarData,
  setColor,
  setReservationFrom,
  setReservationTo,
  setRate,
  setIsFullTank,
  setHasBabySeat,
  setIsRightHand,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderConfirmedContainer);
