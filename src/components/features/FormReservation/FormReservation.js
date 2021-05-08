import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import uniqid from 'uniqid';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchAddNewOrder } from '../../../redux/ordersRedux';

import styles from './FormReservation.module.scss';

class Component extends React.Component {

  state = {
    order: {
      apartments: this.props.bookedApartment,
    },
  }


  handleSumbit = (values) => {
    const {saveReservation} = this.props;

    // alert('submit');
    values.apartments = this.props.bookedApartment;
    values.status = 'submited';
    values.dataOrder = new Date().toISOString();
    values.idOrder = uniqid('order-');
    saveReservation(values);
    console.log('złożone zamówieie', values);
  }

  render() {
    const {className, bookedApartment} = this.props;
    const {order} = this.state;
    console.log('order from state in Form:', order);
    console.log('bookedApartment in Form', bookedApartment);

    return(
      <div className={clsx(className, styles.root)}>
        <h5 className={styles.form_title}>Fill it form in one minute!</h5>
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
              .integer(),
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
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  bookedApartment: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  saveReservation: PropTypes.func,
};

const mapStateToProps = state => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = dispatch => ({
  saveReservation: reservation => dispatch(fetchAddNewOrder(reservation)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as FormReservation,
  Container as FormReservation,
  Component as FormReservationComponent,
};
