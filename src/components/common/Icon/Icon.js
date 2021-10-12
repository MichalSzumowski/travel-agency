import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.scss';

const Icon = props => (<i className={`fas fa-${props.name} ${styles.icon}`}></i>);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
