import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainView.module.scss';

const Component = ({className, category}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.subtitle}>
      <h1 className={styles.subtitle__first}>We have apartment for you!</h1>
      <h2>Say only where you want to rest.</h2>
    </div>
    <div className={styles.cards_group}>
      {category.map(item => (
        <div key={item.id} className={styles.cards_group__item}>
          <Card  className={styles.flex}>
            <CardActionArea>
              <Link to={`#`} className={styles.link}>
                <div className={styles.imageConatiner}>
                  <CardMedia
                    className={styles.image}
                    component="img"
                    image={item.image}
                    title={item.title}
                  />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h5" className={styles.text}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  category: PropTypes.array,
};

const mapStateToProps = state => ({
  category: state.category,
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as MainView,
  Container as MainView,
  Component as MainViewComponent,
};
