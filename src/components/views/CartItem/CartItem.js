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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { fetchEditInCart } from '../../../redux/apartmentsRedux';

import styles from './CartItem.module.scss';

class Component extends React.Component {

  state = {
    cart: {
      id: this.props.id,
      category: this.props.category,
      name: this.props.name,
      city: this.props.city,
      nights: this.props.nights,
      from: this.props.from,
      people: this.props.people,
      priceFromNight: this.props.priceFromNight,
      totalPrice: this.props.totalPrice,
      image: this.props.image,
      message: '',
    },
  }

  setNight = (nights) => {
    const {cart} = this.state;
    const priceForNight = cart.priceFromNight;
    // console.log('cart w setnight1:', cart);
    // console.log('nights in cart:', nights);

    this.setState({ cart: { ...cart, nights: parseInt(nights), totalPrice: priceForNight * parseInt(nights) }});

    const {editInCart} = this.props;
    editInCart({  ...cart, nights: parseInt(nights), totalPrice: priceForNight * parseInt(nights) });
  }

  handleChange = (event) => {
    const {cart} = this.state;
    this.setState({ cart: { ...cart, message: event.target.value }});
    // console.log('message:', event.target.value);

    const {editInCart} = this.props;
    editInCart({  ...cart, message: event.target.value });
  };


  render() {
    const {id, category, name, city, image, people, nights, totalPrice, from, priceFromNight } = this.props;
    const {cart} = this.state;
    // console.log('cart w render:', cart);


    return(
      <Paper elevation={3} className={styles.root}>
        <Card >
          <div className={styles.cart}>
            <div className={styles.cart__imagebox}>
              <img src={image} alt={name}/>
            </div>
            <div className={styles.cart__namebox}>
              <div className={styles.cart__decoration}>{name} in {city}</div>
              <div>(booking for {people} people)</div>
            </div>
            <div className={styles.cart__nightsbox} >
              <div>Nights:</div>
              <PlusMinusSwitcher setAmount={this.setNight} defaultVal={nights} />
            </div>
            <div className={styles.cart__pricebox}>
              <div>Price:</div>
              <div className={styles.cart__decoration}>${cart.totalPrice === undefined ? totalPrice : cart.totalPrice }</div>
            </div>
            <div className={styles.cart__deletebox}>
              <FontAwesomeIcon icon={faTrashAlt} />
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
  changeState: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  image: PropTypes.string,
  people: PropTypes.number,
  nights: PropTypes.number,
  totalPrice: PropTypes.number,
  category: PropTypes.string,
  from: PropTypes.string,
  priceFromNight: PropTypes.number,
  editInCart: PropTypes.func,
};

const mapStateToProps = (state, key) => ({
  // oneFromCart: getOneFromCart(state, key),
});

const mapDispatchToProps = dispatch => ({
  editInCart: reservation => dispatch(fetchEditInCart(reservation)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};
