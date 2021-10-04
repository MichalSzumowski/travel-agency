import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

const OrderForm = props => (

  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={6}>
        <OrderOption {...option} 
          currentValue={props.options[option.id]} // ???
          setOrderOption={props.setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  currentValue: PropTypes.node,
};

export default OrderForm;