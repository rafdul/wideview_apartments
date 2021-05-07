import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../../views/CartItem/CartItem';
import { FormReservation } from '../../features/FormReservation/FormReservation';

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
    open: false,
  }

  formOpen = () =>{
    this.setState({open: true});
  }


  render() {
    const {className, apartmentFromCart} = this.props;
    const {cart, open} = this.state;
    console.log('formularz w Cart', open);
    // console.log('cart w Cart', cart);

    console.log('apartmentFromCart', apartmentFromCart);


    return(
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <h2 className={styles.title}>Finish your reservation</h2>
          <Grid item xs={12}>
            {apartmentFromCart.map(apartment => (
              <CartItem key={apartment._id} {...apartment} >
                {console.log('apartment', apartment)}
              </CartItem>

            ))}

            {open
              ?
              (
                <Paper elevation={3} >
                  <Card className={styles.cart + ' ' + styles.total_price}>
                    <FormReservation />
                  </Card>
                </Paper>
              )
              : null
            }

            <Paper elevation={3} >
              <Card className={styles.cart + ' ' + styles.total_price}>
                <div className={styles.text}>Total price:</div>
                <div className={styles.text}>
                  ${apartmentFromCart.length > 0
                    ? apartmentFromCart.map(apartment => apartment.totalPrice).reduce((prev, curr) => prev + curr)
                    : 0
                  }
                </div>
                <div className={styles.btnBook}>
                  {open
                    ?
                    (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.saveReservation}
                        className={styles.btn_custom}
                      >
                        Send reservation
                      </Button>
                    )
                    :
                    (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={this.formOpen}
                        className={styles.btn_custom}
                      >
                        Book it!
                      </Button>
                    )
                  }

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
