import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';
import styles from './ProductOne.module.scss';


import { connect } from 'react-redux';
import { getOneApartment } from '../../../redux/apartmentsRedux.js';


const Component = ({className, apartment}) => (



  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      {console.log('apartment', apartment)}
      <h3>{apartment.name}</h3>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Card className={styles.cardbox}>
              <CardActionArea>
                <div className={styles.imageContainer}>
                  <CardMedia
                    className={styles.image}
                    component="img"
                    image={apartment.image}
                    title={apartment.name}
                  />
                </div>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Card className={styles.cardbox}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                    {apartment.description}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                    {apartment.city}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                    Bedrooms {apartment.bedrooms}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                    Kitchen {apartment.kitchen}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                    Balcony {apartment.balcony}
                  </Typography>
                  <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                    Swimpool {apartment.swimpool}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper elevation={3}>
            <Card className={styles.cardbox}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                    Daty
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                    Liczba osób
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                    ${apartment.price} by night
                  </Typography>
                  <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                    Price total
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>

  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  apartment: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  apartment: getOneApartment(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductOne,
  Container as ProductOne,
  Component as ProductOneComponent,
};
