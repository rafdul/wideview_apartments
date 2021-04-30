import React from 'react';
import PropTypes from 'prop-types';

import { ApartmentBox } from '../../features/ApartmentBox/ApartmentBox';

import styles from './ProductsAll.module.scss';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAllApartments } from '../../../redux/apartmentsRedux.js';


class Component extends React.Component {

  render() {
    const { className, apartments } = this.props;

    return(
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <h2 className={styles.title}>Check our offer</h2>
          <div className={styles.cards}>

            {apartments.map(apartment => (

              <ApartmentBox
                key={apartment.id}
                link={`/products/${apartment.category}/${apartment.id}`}
                image={apartment.image}
                name={apartment.name}
                city={apartment.city}
                price={apartment.price}
                {...apartment}
              />

            ))}
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  apartments: PropTypes.array,
};

const mapStateToProps = state => ({
  apartments: getAllApartments(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductsAll,
  Container as ProductsAll,
  Component as ProductsAllComponent,
};
