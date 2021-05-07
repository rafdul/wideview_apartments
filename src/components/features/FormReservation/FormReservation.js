import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './FormReservation.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h4>Fill it form in one minute!</h4>
    <Formik
      initialValues={{
        // _id: post._id,
        // title: post.title,
        // text: post.text,
        // price: post.price,
        // photo: post.photo,
        // author: post.author,
        // location: post.location,

        firstName: '',
        surname: '',
        phone: '',
        email: '',
        status: '',
        dataOrder: '',
      }}
      // onSubmit={values => {
      //   if(isNewAnnounce){
      //     values.created = new Date().toISOString();
      //     values.updated = values.created;
      //     const formData = new FormData();
      //     for (let key of ['_id','title', 'text', 'price', 'photo', 'author', 'location', 'phone', 'status', 'created', 'updated']) {
      //       formData.append(key, values[key]);
      //     }
      //     // console.log('values w add', values);
      //     formData.append('file', values.file);
      //     addPost(formData);
      //     // console.log('formData w add', formData);
      //   } else {
      //     values.updated = new Date().toISOString();
      //     const formData = new FormData();
      //     for (let key of ['_id', 'title', 'text', 'price', 'photo', 'author', 'location', 'phone', 'status', 'created', 'updated']) {
      //       formData.append(key, values[key]);
      //     }
      //     // console.log('values w edit', values);
      //     formData.append('file', values.file);
      //     editPost(formData);
      //     // console.log('formData w add', formData);
      //   }
      // }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        surname: Yup.string().required('Surname is required'),
        author: Yup.string().required()
          .email()
          .required('Enter valid email'),
        phone: Yup.number()
          .positive()
          .integer(),
      })}
    >
      {({ handleChange, errors, touched, values }) => (
        <Form>
          <Grid item xs={12} sm={9}>
            <TextField
              name="firstName"
              id="firstName"
              label="First name"
              value={values.firstName}
              fullWidth
              onChange={handleChange}
              error={errors.firstName && touched.firstName ? true : false}
              helperText={errors.firstName && touched.firstName ? errors.firstName : 'Your first name is required.'}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              name="surname"
              id="surname"
              label="Surname"
              value={values.surname}
              fullWidth
              onChange={handleChange}
              error={errors.surname && touched.surname ? true : false}
              helperText={errors.surname && touched.surname ? errors.surname : 'Your surname is required.'}
            />
          </Grid>
          <Grid item xs={12} sm={9} className={styles.paperCard__item}>
            <TextField
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
          <Grid item xs={12} sm={9} className={styles.paperCard__item}>
            <TextField
              type="phone"
              name="phone"
              id="phone"
              label="Phone number"
              value={values.phone}
              fullWidth
              onChange={handleChange}
              error={errors.phone && touched.phone ? true : false}
            />
          </Grid>
        </Form>
      )}
    </Formik>
  </div>
);

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
  Component as FormReservation,
  // Container as FormReservation,
  Component as FormReservationComponent,
};
