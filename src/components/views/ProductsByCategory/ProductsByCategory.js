import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';
import styles from './ProductsByCategory.module.scss';

import { connect } from 'react-redux';
import { getAllApartments } from '../../../redux/apartmentsRedux.js';


const Component = ({ className, apartments, match }) => {

  console.log('props', match.params.categoryId);
  console.log('apartments', apartments);


  return(
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <h3 className={styles.title}>{match.params.categoryId}</h3>

        <div className={styles.cards}>
          {apartments.filter(apartment => apartment.category === match.params.categoryId).map(apartmentByCat => (
            <div key={apartmentByCat.id} className={styles.cards__item}>
              <Card className={styles.cardbox}>
                <CardActionArea>
                  <Link to={`/products/${match.params.categoryId}/${apartmentByCat.id}`} className={styles.link}>
                    <div className={styles.imageContainer}>
                      <CardMedia
                        className={styles.image}
                        component="img"
                        image={apartmentByCat.image}
                        title={apartmentByCat.name}
                      />
                    </div>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5" className={styles.text}>
                        {apartmentByCat.name} in {apartmentByCat.city}
                      </Typography>
                      <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                        Price from ${apartmentByCat.price} by night
                      </Typography>
                    </CardContent>
                    <Typography component="p" className={styles.more}>
                      Show more
                    </Typography>
                  </Link>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  apartments: PropTypes.array,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  apartments: getAllApartments(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductsByCategory,
  Container as ProductsByCategory,
  Component as ProductsByCategoryComponent,
};
