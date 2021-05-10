import React from 'react';
import PropTypes from 'prop-types';
import { CartItem } from '../../views/CartItem/CartItem';
import { FormReservation } from '../../features/FormReservation/FormReservation';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getFromCart, fetchAddToCart } from '../../../redux/apartmentsRedux';
import { getLoadingOrders } from '../../../redux/ordersRedux';

import styles from './Cart.module.scss';

class Component extends React.Component {

  state = {
    cart: this.props.apartmentFromCart,
    open: false,
  }

  formOpen = (event) =>{
    event.preventDefault();
    this.setState({open: true});
  }

  render() {
    const {className, apartmentFromCart, loadingOrders} = this.props;
    const {open} = this.state;
    // console.log('formularz w Cart', open);
    // console.log('cart w Cart', cart);
    // console.log('apartmentFromCart', apartmentFromCart);

    return(
      <div className={clsx(className, styles.root)}>

        <div className={styles.container}>

          {!loadingOrders.done
            ?
            <h2 className={apartmentFromCart.length < 1 ? styles.title__empty : styles.title}>
              {apartmentFromCart.length < 1
                ? 'Your cart is empty'
                : 'Finish your reservation'
              }
            </h2>
            :
            <div className={styles.container__success}>
              <FontAwesomeIcon icon={faCheckCircle} className={styles.iconSuccess} />
              <h2 className={styles.titleSuccess}>Thanks for your booking!</h2>
            </div>
          }

          <Grid item xs={12}>
            {apartmentFromCart.map(apartment => (
              <CartItem key={apartment._id} {...apartment} >
                {/* {console.log('apartment', apartment)} */}
              </CartItem>
            ))}

            {apartmentFromCart.length > 0
              ?
              (<Paper elevation={3} >
                <Card>
                  {open
                    ?
                    (
                      <FormReservation bookedApartment={apartmentFromCart}/>
                    )
                    :
                    (
                      <div className={styles.cart + ' ' + styles.total_price}>
                        <div className={styles.text}>Total price:</div>
                        <div className={styles.text}>
                          ${apartmentFromCart.length > 0
                            ? apartmentFromCart.map(apartment => apartment.totalPrice).reduce((prev, curr) => prev + curr)
                            : 0
                          }
                        </div>
                        <div className={styles.btnBook}>
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={event => this.formOpen(event)}
                            className={styles.btn_custom}
                          >
                            Book it!
                          </Button>

                        </div>
                      </div>
                    )
                  }
                </Card>
              </Paper>)
              :
              null
            }
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
  loadingOrders: PropTypes.object,
};

const mapStateToProps = state => ({
  apartmentFromCart: getFromCart(state),
  loadingOrders: getLoadingOrders(state),
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
