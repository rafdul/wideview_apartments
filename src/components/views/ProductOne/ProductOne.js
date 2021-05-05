import React from 'react';
import PropTypes from 'prop-types';
import { LocationPin } from '../../features/LocationPin/LocationPin';
import { PlusMinusSwitcher } from '../../features/PlusMinusSwitcher/PlusMinusSwitcher';
import { DatePicker } from '../../features/DatePicker/DatePicker';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import GoogleMapReact from 'google-map-react';

import clsx from 'clsx';
import styles from './ProductOne.module.scss';

import { connect } from 'react-redux';
import { getOneApartment, fetchAddToCart } from '../../../redux/apartmentsRedux.js';


class Component extends React.Component {
  state = {
    cart: {
      id: this.props.apartment.id,
      category: this.props.apartment.category,
      name: this.props.apartment.name,
      city: this.props.apartment.city,
      nights: 0,
      from: '',
      people: 0,
      priceFromNight: this.props.apartment.price,
      totalPrice: 0,
      image: this.props.apartment.image[1],
    },
  }

  setNight = (nights) => {
    const {cart} = this.state;
    this.setState({cart: { ...cart, nights: parseInt(nights), totalPrice: this.props.apartment.price * parseInt(nights) }});
    // console.log('nights in ProductOne', nights);
  }

  setPeople = (people) => {
    const {cart} = this.state;
    this.setState({cart: { ...cart, people: people }});
    // console.log('people', people);
  }

  setDate = (date) => {
    const {cart} = this.state;
    this.setState({cart: {...cart, from: date.toLocaleDateString('en-US') }});
  }

  submitForm = (event) => {
    // event.preventDefault();
    const {cart} = this.state;
    const {addToCart} = this.props;

    // console.log('cart wysłany do redux', cart);
    addToCart(cart);
  }



  render() {
    const {className, apartment} = this.props;
    const { cart } = this.state;

    // console.log('this.state.cart w render', this.state.cart);

    const location = {
      address: apartment.name,
      lat: apartment.location.lat,
      lng: apartment.location.lng,
    };

    return(
      <div className={clsx(className, styles.root)}>
        <div className={styles.container}>
          <h3 className={styles.title}>{apartment.name}</h3>
          <h5 className={styles.subtitle}>{apartment.city}</h5>
          <p className={styles.subtitle}>{apartment.description}</p>
          <Grid container>
            <div className={styles.grid}>
              <section className={styles.big_image}>
                <CardMedia
                  className={styles.image}
                  component="img"
                  image={apartment.image[0]}
                  title={apartment.name}
                />
              </section>
              <section className={styles.big_text}>
                <span className={styles.marketing_box}>
                  <h3 className={styles.marketing}>Exclusive relax from ${apartment.price}</h3>
                </span>
              </section>
              <section className={styles.small_image}>
                <CardMedia
                  className={styles.image}
                  component="img"
                  image={apartment.image[1]}
                  title={apartment.name}
                />
              </section>
              <section className={styles.small_text}>
                <span className={styles.marketing_box}>
                  <h3 className={styles.marketing}>We are waiting for you</h3>
                </span>
              </section>
              <section className={styles.medium_image}>
                <CardMedia
                  className={styles.image}
                  component="img"
                  image={apartment.image[2]}
                  title={apartment.name}
                />
              </section>

            </div>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={styles.cardbox}>
                <Card >
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6" className={styles.text}>
                      Amenities
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                      {apartment.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}: {apartment.bedrooms}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                      {apartment.kitchen === 1 ? 'Kitchen' : 'Kitchens'}: {apartment.kitchen}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                      {apartment.balcony === 1 ? 'Balcony' : 'Balconies'}: {apartment.balcony}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                      Swimpool: {apartment.swimpool}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h6" className={styles.text}>
                      Location
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                      {apartment.city}
                    </Typography>
                    <Paper variant="outlined">
                      <div className={styles.map}>
                        <GoogleMapReact
                          // bootstrapURLKeys={{ key: '' }}
                          defaultCenter={location}
                          defaultZoom={15}
                        >
                          <LocationPin
                            lat={location.lat}
                            lng={location.lng}
                            text={location.address}
                          />
                        </GoogleMapReact>
                      </div>
                    </Paper>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className={styles.cardbox}>
                <Card >
                  <CardContent className={styles.content}>
                    <Typography gutterBottom variant="h6" component="h6" className={styles.text}>
                      Make a booking!
                    </Typography>
                    <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                      {apartment.name} in {apartment.city}
                    </Typography>
                    <div className={styles.content__flex}>
                      <div className={styles.name + ' ' + styles.date}>
                        <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                          From:
                        </Typography>
                      </div>
                      <div className={styles.choose}>
                        <DatePicker setDate={this.setDate} />
                      </div>
                    </div>
                    <div className={styles.content__flex}>
                      <div className={styles.name}>
                        <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                          Nights:
                        </Typography>
                      </div>
                      <div className={styles.choose}>
                        <PlusMinusSwitcher setAmount={this.setNight} />
                      </div>
                    </div>
                    <div className={styles.content__flex}>
                      <div className={styles.name}>
                        <Tooltip title={`max. ${apartment.bedrooms *2 } people`}>
                          <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                            People <FontAwesomeIcon icon={faInfoCircle} className={styles.fontIcon}/> :
                          </Typography>
                        </Tooltip>
                      </div>
                      <div className={styles.choose}>
                        <PlusMinusSwitcher maxValue={`${apartment.bedrooms *2}`} setAmount={this.setPeople} />
                      </div>
                    </div>
                    <div className={styles.content__flex}>
                      <div className={styles.name}>
                        <Tooltip title='for 1 night, all suite'>
                          <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                            Price <FontAwesomeIcon icon={faInfoCircle} className={styles.fontIcon}/> :
                          </Typography>
                        </Tooltip>
                      </div>
                      <div className={styles.choose}>
                        <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                          ${apartment.price}
                        </Typography>
                      </div>
                    </div>
                    <div className={styles.content__flex}>
                      <div className={styles.name}>
                        <Typography gutterBottom variant="h6" component="p" className={styles.text}>
                          Total price:
                        </Typography>
                      </div>
                      <div className={styles.choose}>
                        <Typography gutterBottom variant="h6" component="p" className={styles.text}>
                          ${cart.totalPrice}
                        </Typography>
                      </div>
                    </div>
                  </CardContent>
                  <div className={styles.btnBook} >
                    <Button variant="contained" color="secondary" onClick={this.submitForm}>
                      Book it!
                    </Button>
                  </div>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  apartment: PropTypes.object,
  addToCart: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  apartment: getOneApartment(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: reservation => dispatch(fetchAddToCart(reservation)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductOne,
  Container as ProductOne,
  Component as ProductOneComponent,
};
