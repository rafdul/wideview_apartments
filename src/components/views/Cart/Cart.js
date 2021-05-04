import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { PlusMinusSwitcher } from '../../features/PlusMinusSwitcher/PlusMinusSwitcher';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = ({className}) => {

  const [nights, setNight] = useState(0);

  return(
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <h2>Finish your reservation</h2>
        <Grid item xs={12} >
          <Paper elevation={3} >
            <Card >
              <div className={styles.cart}>
                <div className={styles.cart__imagebox}>
                  <img src="https://placeimg.com/340/180/arch" alt="#"/>
                </div>
                <div className={styles.cart__namebox}>
                  <div className={styles.cart__decoration}>Apartament zacisze w Szczyrku</div>
                  <div>(rezerwujesz dla 4 osób)</div>
                </div>
                <div className={styles.cart__nightsbox}>
                  <div>Nights:</div>
                  <PlusMinusSwitcher setAmount={setNight}/>
                </div>
                <div className={styles.cart__pricebox}>
                  <div>Price:</div>
                  <div className={styles.cart__decoration}>$1600</div>
                </div>
                <div className={styles.cart__deletebox}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </div>
              </div>
              <div className={styles.infobox}>
                <TextField
                  className={styles.textarea}
                  id="outlined-multiline-static"
                  label="Important for reservation"
                  multiline
                  rows={2}
                  defaultValue="Default Value"
                  variant="outlined"
                />
              </div>
            </Card>
          </Paper>
          <Paper elevation={3} >
            <Card className={styles.cart + ' ' + styles.total_price}>
              <div className={styles.text}>Total price:</div>
              <div className={styles.text}>$1000</div>
            </Card>
          </Paper>

        </Grid>
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
  Component as Cart,
  // Container as Cart,
  Component as CartComponent,
};
