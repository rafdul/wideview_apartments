import React from 'react';
import PropTypes from 'prop-types';
import { LocationPin } from '../../features/LocationPin/LocationPin';
import { PlusMinusSwitcher } from '../../features/PlusMinusSwitcher/PlusMinusSwitcher';
import { DatePicker } from '../../features/DatePicker/DatePicker';
import { Loading } from '../../common/Loading/Loading';
import { Error } from '../../common/Error/Error';

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
import { getOneApartment, fetchAddToCart, fetchOnePublished, getOne, getLoading } from '../../../redux/apartmentsRedux.js';


class Component extends React.Component {
  state = {
    cart: {
      // id: this.props.apartment.id,
      category: this.props.getOne.category,
      name: this.props.getOne.name,
      city: this.props.getOne.city,
      nights: 0,
      from: '',
      people: 0,
      priceFromNight: this.props.getOne.price,
      totalPrice: 0,
      image: this.props.getOne.image,
    },
  }

  componentDidMount() {
    const { fetchOneApartment } = this.props;
    fetchOneApartment();

    // console.log('fetchOneApartment', fetchOneApartment);
  }

  setNight = (nights) => {
    const {cart} = this.state;
    this.setState({cart: { ...cart, nights: parseInt(nights), totalPrice: this.props.getOne.price * parseInt(nights) }});
    // console.log('nights in ProductOne', nights);
    // console.log('cart w setNight', cart);
  }

  setPeople = (people) => {
    const {cart} = this.state;
    this.setState({cart: { ...cart, people: people }});
    // console.log('people', people);
    // console.log('cart w setPeople', cart);
  }

  setDate = (date) => {
    const {cart} = this.state;
    this.setState({cart: {...cart, from: date.toLocaleDateString('en-US') }});
  }

  submitForm = (event) => {
    // event.preventDefault();
    const {cart} = this.state;
    const {addToCart} = this.props;

    cart._id = this.props.getOne._id;
    cart.category = this.props.getOne.category;
    cart.name = this.props.getOne.name;
    cart.city = this.props.getOne.city;
    cart.priceFromNight = this.props.getOne.price;
    cart.image = this.props.getOne.image[0];

    // console.log('cart wysłany do redux', cart);
    addToCart(cart);
  }



  render() {
    const {className, getOne, loading} = this.props;
    const { cart } = this.state;

    // console.log('this.state.cart w render', this.state.cart);
    // console.log('getOne:', getOne);
    // console.log('loading:', loading);


    const location = {
      address: getOne.name,
      lat: getOne.location === undefined ? 0 : getOne.location.lat,
      lng: getOne.location === undefined ? 0 : getOne.location.lng,
    };
    // console.log('location:', location);

    if(loading && loading.active === true) {
      return(
        <Loading />
      );
    }
    else if(loading && loading.error === true) {
      return(
        <Error />
      );
    }
    else {
      return(
        <div className={clsx(className, styles.root)}>
          <div className={styles.container}>
            <h3 className={styles.title}>{getOne.name}</h3>
            <h5 className={styles.subtitle}>{getOne.city}</h5>
            <p className={styles.subtitle}>{getOne.description}</p>
            <Grid container>
              <Card className={styles.grid}>
                <section className={styles.big_image}>
                  <CardMedia
                    className={styles.image[0]}
                    component="img"
                    image={getOne.image === undefined ? '/images/offers/photo_test.jpg' : getOne.image[0]}
                    title={`${getOne.name}_1`}
                  />
                </section>
                <section className={styles.big_text}>
                  <span className={styles.marketing_box}>
                    <h3 className={styles.marketing}>Exclusive relax from ${getOne.price}</h3>
                  </span>
                </section>
                <section className={styles.small_image}>
                  <CardMedia
                    className={styles.image}
                    component="img"
                    image={getOne.image === undefined ? 'https://placeimg.com/640/480/any' : getOne.image[1]}
                    title={`${getOne.name}_2`}
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
                    image={getOne.image === undefined ? 'https://placeimg.com/640/480/any' : getOne.image[2]}
                    title={`${getOne.name}_3`}
                  />
                </section>

              </Card>
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
                        {getOne.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}: {getOne.bedrooms}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                        {getOne.kitchen === 1 ? 'Kitchen' : 'Kitchens'}: {getOne.kitchen}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                        {getOne.balcony === 1 ? 'Balcony' : 'Balconies'}: {getOne.balcony}
                      </Typography>
                      <Typography gutterBottom variant="body2" component="p" className={styles.text}>
                        Swimpool: {getOne.swimpool}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h6" className={styles.text}>
                        Location
                      </Typography>
                      <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                        {getOne.city}
                      </Typography>
                      <Paper variant="outlined">
                        <div className={styles.map}>
                          <GoogleMapReact
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
                        {getOne.name} in {getOne.city}
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
                          <Tooltip title={`max. ${getOne.bedrooms *2 } people`}>
                            <Typography gutterBottom variant="body1" component="p" className={styles.text}>
                              People <FontAwesomeIcon icon={faInfoCircle} className={styles.fontIcon}/> :
                            </Typography>
                          </Tooltip>
                        </div>
                        <div className={styles.choose}>
                          <PlusMinusSwitcher maxValue={`${getOne.bedrooms *2}`} setAmount={this.setPeople} />
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
                            ${getOne.price}
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
}

Component.propTypes = {
  className: PropTypes.string,
  // apartment: PropTypes.object,
  addToCart: PropTypes.func,
  fetchOneApartment: PropTypes.func,
  getOne: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  // getOne: PropTypes.objectOf(
  //   PropTypes.shape({
  //     name: PropTypes.string,
  //     category: PropTypes.string,
  //     city: PropTypes.string,
  //     description: PropTypes.string,
  //     price: PropTypes.number,
  //     image: PropTypes.array,
  //     location: PropTypes.object,
  //     bedrooms: PropTypes.number,
  //     kitchen: PropTypes.number,
  //     swimpool: PropTypes.string,
  //     balcony: PropTypes.number,
  //   })
  // ),
  loading: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  // apartment: getOneApartment(state, props.match.params.id),
  getOne: getOne(state),
  loading: getLoading(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addToCart: reservation => dispatch(fetchAddToCart(reservation)),
  fetchOneApartment: () => dispatch(fetchOnePublished(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductOne,
  Container as ProductOne,
  Component as ProductOneComponent,
};
