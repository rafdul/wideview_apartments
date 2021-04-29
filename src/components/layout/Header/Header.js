import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import styles from './Header.module.scss';


// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({className}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <img src="/images/logo.svg" alt="logo" title="logo" className={styles.image}/>
        </div>
        <div>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Seaside" />
            <Tab label="Cieties" />
            <Tab label="Mountains" />
            <Tab label="Countryside" />
          </Tabs>
        </div>
        <div>
          <Link to={'#'} className={styles.container__cart}>
            <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
