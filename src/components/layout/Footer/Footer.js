import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.footer}>
      <Grid container spacing={3} className={styles.container}>
        <Grid item xs={12} sm={8} className={styles.item}>
          <h5>WideView</h5>
          <p>Suspendisse at magna. Cum sociis natoque penatibus et lacus iaculis odio et wisi accumsan augue mi, gravida at, velit. Mauris id elit tincidunt wisi nunc, vitae eros cursus dignissim id, semper orci, gravida ullamcorper mauris. Nunc velit sed justo.</p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h5>Newsletter</h5>
          <div className={styles.group}>
            <input type="email" placeholder="email address" />
            <div>
              <Button variant="contained" color="secondary">
                Sign up!
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} className={styles.socialmedia}>
          <Link href="#">
            <FontAwesomeIcon icon={faFacebook} href="#" className={styles.socialmedia__icon}/>
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faTwitter} className={styles.socialmedia__icon}/>
          </Link>
          <Link href="#">
            <FontAwesomeIcon icon={faInstagram} className={styles.socialmedia__icon}/>
          </Link>
        </Grid>
      </Grid>
    </div>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
