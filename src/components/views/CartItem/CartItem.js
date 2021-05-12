import React from 'react';
import PropTypes from 'prop-types';
import { PlusMinusSwitcher } from '../../features/PlusMinusSwitcher/PlusMinusSwitcher';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
// import { } from '../../../redux/apartmentsRedux';
import { fetchOrdersEdit, fetchOrdersDeleteOne } from '../../../redux/ordersRedux';

import styles from './CartItem.module.scss';

class Component extends React.Component {

  state = {
    apartments: {
      _id: this.props.apartments._id,
      category: this.props.apartments.category,
      name: this.props.apartments.name,
      city: this.props.apartments.city,
      nights: this.props.apartments.nights,
      from: this.props.apartments.from,
      people: this.props.apartments.people,
      priceFromNight: this.props.apartments.priceFromNight,
      totalPrice: this.props.apartments.totalPrice,
      image: this.props.apartments.image,
      message: '',
      dataOrder: this.props.dataOrder,
      idOrder: this.props.idOrder,
      status: this.props.status,
    },
  }

  setNight = (nights) => {
    const {apartments} = this.state;
    const priceForNight = apartments.priceFromNight;
    console.log('apartments w setnight1:', apartments);
    // console.log('nights in order:', nights);

    this.setState(
      {
        apartments: {
          ...apartments,
          nights: parseInt(nights),
          totalPrice: priceForNight * parseInt(nights),
          status: 'edited',
        },
      },
    );

    const {editInCart} = this.props;
    editInCart(
      {
        apartments: {
          ...apartments,
          nights: parseInt(nights),
          totalPrice: priceForNight * parseInt(nights),
          status: 'edited',
        },

      },
    );
  }

  handleChange = (event) => {
    const {apartments} = this.state;

    this.setState(
      {
        apartments: {
          ...apartments,
          message: event.target.value,
          status: 'edited',
        },
      },
    );

    const {editInCart} = this.props;
    editInCart(
      {
        apartments: {
          ...apartments,
          message: event.target.value,
          status: 'edited',
        },
      },
    );
  };

  deleteFromCart = (event) => {
    // event.preventDefault();

    const {apartments} = this.state;
    const {deleteReservation} = this.props;
    deleteReservation(apartments);
  }


  render() {
    const { apartments } = this.props;
    // const {apartments} = this.state;
    // console.log('this.props w cartitem:', this.props);


    return(
      <Paper elevation={3} className={styles.root}>
        <Card >
          <div className={styles.cart}>
            <div className={styles.cart__imagebox}>
              <img src={apartments.image} alt={apartments.name}/>
            </div>
            <div className={styles.cart__namebox}>
              <div className={styles.cart__decoration}>{apartments.name} in {apartments.city}</div>
              <div>(booking for {apartments.people} people from {apartments.from})</div>
            </div>
            <div className={styles.cart__nightsbox} >
              <div>Nights:</div>
              <PlusMinusSwitcher setAmount={this.setNight} defaultVal={apartments.nights} />
            </div>
            <div className={styles.cart__pricebox}>
              <div>Price:</div>
              <div className={styles.cart__decoration}>${this.state.apartments.totalPrice === undefined ? apartments.totalPrice : this.state.apartments.totalPrice }</div>
            </div>
            <div className={styles.cart__deletebox} >
              <IconButton aria-label="delete" onClick={this.deleteFromCart}>
                <FontAwesomeIcon icon={faTrashAlt} className={styles.deleteIcon}/>
              </IconButton>
            </div>
          </div>
          <div className={styles.infobox}>
            <Accordion>
              <AccordionSummary
                expandIcon={<FontAwesomeIcon icon={faAngleDown} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={styles.accordion_summary}>Write your message to us</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.accordion_details}>
                <TextField
                  className={styles.textarea}
                  id="outlined-multiline-static"
                  label="Important for reservation (max. 60 characters)"
                  multiline
                  rows={2}
                  variant="outlined"
                  onChange={this.handleChange}
                  inputProps={{ maxLength: 60 }}
                />
              </AccordionDetails>
            </Accordion>
          </div>
        </Card>
      </Paper>
    );
  }
}

Component.propTypes = {
  status: PropTypes.string,
  editInCart: PropTypes.func,
  deleteReservation: PropTypes.func,
  apartments: PropTypes.object,
  dataOrder: PropTypes.string,
  idOrder: PropTypes.string,
};

const mapStateToProps = (state, key) => ({

});

const mapDispatchToProps = dispatch => ({
  deleteReservation: reservation => dispatch(fetchOrdersDeleteOne(reservation)),
  editInCart: reservation => dispatch(fetchOrdersEdit(reservation)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};
