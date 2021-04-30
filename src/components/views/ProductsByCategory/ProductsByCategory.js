import React from 'react';
import PropTypes from 'prop-types';

import { ApartmentBox } from '../../features/ApartmentBox/ApartmentBox';

import clsx from 'clsx';
import styles from './ProductsByCategory.module.scss';

import { connect } from 'react-redux';
import { getAllApartments } from '../../../redux/apartmentsRedux.js';


const Component = ({ className, apartments, match }) => {

  // console.log('props', match.params.categoryId);
  // console.log('apartments', apartments);


  return(
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <h3 className={styles.title}>{match.params.categoryId}</h3>

        <div className={styles.cards}>
          {apartments.filter(apartment => apartment.category === match.params.categoryId).map(apartmentByCat => (

            <ApartmentBox
              key={apartmentByCat.id}
              link={`/products/${apartmentByCat.category}/${apartmentByCat.id}`}
              image={apartmentByCat.image}
              name={apartmentByCat.name}
              city={apartmentByCat.city}
              price={apartmentByCat.price}
              {...apartmentByCat}
            />

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
