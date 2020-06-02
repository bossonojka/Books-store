import React, { useState, useEffect } from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Button } from '../../_shared/Button';
import PropTypes from 'prop-types';
import { orderListType } from '../../../helpers/propTypes';

import './CheckoutForm.scss';

export const CheckoutForm = ({ checkout, orderList, onClick }) => {
  const [data, setData] = useState({
    city: '',
    address: '',
    phone: '',
    date: null,
    books: [],
  });

  const [fail, setFail] = useState({ city: '', address: '', phone: '', date: '' });

  useEffect(() => {
    setData({
      ...data,
      date: getMinDate(),
      books: orderList,
    });
  }, [orderList]);

  const save = (e) => {
    if (!e?.target) {
      setData({
        ...data,
        date: e,
      });

      return;
    }

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const getMinDate = () => {
    const now = new Date();
    now.setDate(now.getDate() + 1);

    return now;
  };

  const validate = () => {
    const { city, address, phone, date } = data;
    let _fail = {};

    if (!city) {
      _fail.city = 'The city should not be empty';
    } else if (!/^[A-Za-zА-Яа-я]+$/.test(city)) {
      _fail.city = 'The name of the city should consist only of letters';
    }

    if (!address) {
      _fail.address = 'Address must not be empty';
    }

    if (!/\d{10}/.test(phone)) {
      _fail.phone = 'Phone number must be 10 digits';
    }

    if (!date) {
      _fail.date = 'Date must be indicated';
    }

    if (_fail.city || _fail.address || _fail.phone || _fail.date) {
      setFail(_fail);
      return;
    }

    checkout({ ...data, date: data.date.getTime() }).then(() => {
      window.location.replace('http://localhost:3000/');
    });
  };

  return (
    <div className="checkout" onClick={onClick}>
      <div className="checkout-controls">
        <input className="checkout-control" type="text" placeholder="City" name="city" onChange={save} required />
        {fail.city && <span className="checkout-error">{fail.city}</span>}
        <input className="checkout-control" type="text" placeholder="Address" name="address" onChange={save} required />
        {fail.address && <span className="checkout-error">{fail.address}</span>}
        <input
          className="checkout-control"
          type="text"
          placeholder="Phone number"
          name="phone"
          onChange={save}
          required
        />
        {fail.phone && <span className="checkout-error">{fail.phone}</span>}
        <DateTimePicker
          className="checkout-control checkout-picker"
          value={data.date}
          name="date"
          onChange={save}
          disableClock={true}
          format="dd/MM/yy HH:mm"
          minDate={getMinDate()}
          maxDetail="second"
          required
        />
        {fail.date && <span className="checkout-error">{fail.date}</span>}
        <Button className="checkout-control checkout-btn" title="Submit" onClick={validate} />
      </div>
    </div>
  );
};

CheckoutForm.propTypes = {
  checkout: PropTypes.func.isRequired,
  orderList: PropTypes.arrayOf(PropTypes.shape(orderListType)).isRequired,
  onClick: PropTypes.func.isRequired,
};
