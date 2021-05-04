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

import { connect } from 'react-redux';
import { getFromCart } from '../../../redux/apartmentsRedux';

import styles from './Cart.module.scss';

const Component = ({className, apartmentFromCart}) => {

  const [nights, setNight] = useState(0);
  console.log('apartmentFromCart', apartmentFromCart);

  return(
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <h2 className={styles.title}>Finish your reservation</h2>
        <Grid item xs={12} >
          <Paper elevation={3} >
            <Card >
              <div className={styles.cart}>
                <div className={styles.cart__imagebox}>
                  <img src="https://placeimg.com/340/180/arch" alt="#"/>
                </div>
                <div className={styles.cart__namebox}>
                  <div className={styles.cart__decoration}>{apartmentFromCart.name} in {apartmentFromCart.city}</div>
                  <div>(booking for {apartmentFromCart.people} people)</div>
                </div>
                <div className={styles.cart__nightsbox}>
                  <div>Nights:</div>
                  <PlusMinusSwitcher setAmount={setNight} defaultVal={apartmentFromCart.nights}/>
                </div>
                <div className={styles.cart__pricebox}>
                  <div>Price:</div>
                  <div className={styles.cart__decoration}>${apartmentFromCart.totalPrice}</div>
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
  apartmentFromCart: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = state => ({
  apartmentFromCart: getFromCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
