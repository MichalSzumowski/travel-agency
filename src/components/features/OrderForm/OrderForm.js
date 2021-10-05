import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripCountry, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const tripDetails = {totalCost, tripName, tripCountry, tripId, countryCode};

  if(options.name && options.contact) {
    const payload = {
      ...options,
      tripDetails,
    };

    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
  else {
    alert('Enter your contact info!');
  }
};

const OrderForm = props => (

  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} 
          currentValue={props.options[option.id]}
          setOrderOption={props.setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
      <Button onClick={() => sendOrder(props.options, props.tripCost, props.tripName, props.tripCountry, props.tripId, props.countryCode)}>Order now!</Button>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.number,
  tripCountry: PropTypes.string,
  countryCode: PropTypes.object,
};

export default OrderForm;