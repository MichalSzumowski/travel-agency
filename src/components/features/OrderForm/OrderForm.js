import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';

const OrderForm = props => (

  <Row>
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
};

export default OrderForm;