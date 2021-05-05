import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../../views/CartItem/CartItem';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getFromCart, fetchAddToCart } from '../../../redux/apartmentsRedux';

import styles from './Cart.module.scss';

class Component extends React.Component {

  state = {
    cart: this.props.apartmentFromCart,
  }

  changeState = (cart) => {
    // const {cart} = this.state;
    console.log('cart w koszyku', cart);

    // this.setState({cart: })
  }


  render() {
    const {className, apartmentFromCart} = this.props;
    const {cart} = this.state;
    console.log('cart w CART', cart);

    // let result = 0;
    // const total = (cart) => {
    //   if(cart.length > 0) {
    //     const tab = cart.map(item => item.totalPrice);
    //     result = tab.reduce((prev, curr) => prev + curr);
    //     console.log('result', result);
    //     return result;
    //   }
    // };



    return(
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <h2 className={styles.title}>Finish your reservation</h2>
          <Grid item xs={12} >
            {apartmentFromCart.map(apartment => (
              <CartItem key={apartment.id} {...apartment} changeState={this.changeState}>
                {console.log('apartment', apartment)}
              </CartItem>

            ))}

            <Paper elevation={3} >
              <Card className={styles.cart + ' ' + styles.total_price}>
                <div className={styles.text}>Total price:</div>
                {/* <div className={styles.text}>${total(cart)}</div> */}
                <div className={styles.btnBook}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.submitForm}
                    className={styles.btn_custom}
                  >
                    Book it!
                  </Button>
                </div>
              </Card>
            </Paper>
          </Grid>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  apartmentFromCart: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  addToCart: PropTypes.func,
};

const mapStateToProps = state => ({
  apartmentFromCart: getFromCart(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: reservation => dispatch(fetchAddToCart(reservation)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
