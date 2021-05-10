import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import uniqid from 'uniqid';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchAddNewOrder, getLoadingOrders } from '../../../redux/ordersRedux';
import { fetchDeleteAllFromCart } from '../../../redux/apartmentsRedux';

import styles from './FormReservation.module.scss';

class Component extends React.Component {

  state = {
    order: {
      apartments: this.props.bookedApartment,
    },
    open: true,
  }


  handleSumbit = (values) => {
    const {saveReservation, deleteAllFromCart} = this.props;

    // alert('submit');
    values.apartments = this.props.bookedApartment;
    values.status = 'submited';
    values.dataOrder = new Date().toISOString();
    values.idOrder = uniqid('order-');
    saveReservation(values);
    deleteAllFromCart();
    console.log('złożone zamówieie', values);
  }

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const { className, bookedApartment, loading } = this.props;
    const { open } = this.state;
    // console.log('order from state in Form:', order);
    // console.log('bookedApartment in Form', bookedApartment);

    return(
      <div className={clsx(className, styles.root)}>
        <h5 className={styles.form_title}>Fill it form in one minute!</h5>
        {console.log('loading', loading)}
        <Formik
          initialValues={{
            firstName: '',
            surname: '',
            phone: '',
            email: '',
          }}
          onSubmit={values => this.handleSumbit(values)}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required('First name is required'),
            surname: Yup.string().required('Surname is required'),
            email: Yup.string().required()
              .email()
              .required('Enter valid email'),
            phone: Yup.number()
              .positive()
              .integer()
              .required(),
          })}
        >
          {({handleChange, errors, touched, values, isSubmitting }) => (
            <Form>
              <Grid container justify="center" alignItems="center" className={styles.formContainer}>
                <Grid item xs={12} sm={9} className={styles.formContainer__item}>
                  <TextField
                    variant="outlined"
                    className={styles.formContainer__input}
                    name="firstName"
                    id="firstName"
                    label="First name"
                    value={values.firstName}
                    fullWidth
                    onChange={handleChange}
                    error={errors.firstName && touched.firstName ? true : false}
                  />
                </Grid>
                <Grid item xs={12} sm={9} className={styles.formContainer__item}>
                  <TextField
                    variant="outlined"
                    name="surname"
                    id="surname"
                    label="Surname"
                    value={values.surname}
                    fullWidth
                    onChange={handleChange}
                    error={errors.surname && touched.surname ? true : false}
                  />
                </Grid>
                <Grid item xs={12} sm={9} className={styles.formContainer__item}>
                  <TextField
                    variant="outlined"
                    type="email"
                    name="email"
                    id="email"
                    label="Email address"
                    value={values.email}
                    fullWidth
                    onChange={handleChange}
                    error={errors.email && touched.email ? true : false}
                  />
                </Grid>
                <Grid item xs={12} sm={9} className={styles.formContainer__item}>
                  <TextField
                    variant="outlined"
                    type="tel"
                    name="phone"
                    id="phone"
                    label="Phone number"
                    value={values.phone}
                    fullWidth
                    inputProps={{minLength: 6, maxLength: 12}}
                    onChange={handleChange}
                    error={errors.phone && touched.phone ? true : false}
                  />
                </Grid>
              </Grid>
              <div className={styles.cart + ' ' + styles.total_price}>
                <div className={styles.text}>Total price:</div>
                <div className={styles.text}>
                  ${bookedApartment.length > 0
                    ? bookedApartment.map(apartment => apartment.totalPrice).reduce((prev, curr) => prev + curr)
                    : 0
                  }
                </div>
                <div className={styles.btnBook}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={styles.btn_custom}
                    disabled={isSubmitting}
                  >
                    {!isSubmitting ? 'Save reservation' : 'Well done!'}
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        {(loading && loading.error) &&
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={this.handleClose}
            message="Something went wrong"
            className={styles.snackbarr__error}
          />
        }

      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  bookedApartment: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  saveReservation: PropTypes.func,
  loading: PropTypes.object,
  deleteAllFromCart: PropTypes.func,
};

const mapStateToProps = state => ({
  loading: getLoadingOrders(state),
});

const mapDispatchToProps = dispatch => ({
  saveReservation: reservation => dispatch(fetchAddNewOrder(reservation)),
  deleteAllFromCart: reservations => dispatch(fetchDeleteAllFromCart(reservations)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as FormReservation,
  Container as FormReservation,
  Component as FormReservationComponent,
};
