import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './LocationPin.module.scss';

const Component = ({text}) => (
  <div className={styles.pin}>
    <FontAwesomeIcon icon={faMapMarkerAlt} href="#" className={styles.pin__icon}/>
    <p className={styles.pin__text}>{text}</p>
  </div>
);

Component.propTypes = {
  text: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as LocationPin,
  // Container as LocationPin,
  Component as LocationPinComponent,
};
