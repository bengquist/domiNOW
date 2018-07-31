import React, { Component } from "react";
import PropTypes from "prop-types";
import Geocode from "react-geocode";
import axios from "axios";

import Store from "../Store/Store";

export default class Location extends Component {
  state = {
    loading: true,
    address: "",
    stores: []
  };

  componentDidMount() {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

    Geocode.enableDebug();

    this.getAddress();
  }

  getAddress = () => {
    let lat = PropTypes.number;
    let long = PropTypes.number;
    // console.log(navigator.geolocation.getCurrentPosition);

    navigator.geolocation.getCurrentPosition(
      position => {
        // success cb
        lat = position.coords.latitude;
        long = position.coords.longitude;
        let address = "";

        Geocode.fromLatLng(lat, long).then(response => {
          address = response.results[0].formatted_address;

          this.setState({ loading: false, address }, () => {
            console.log(lat, long, address);

            const formattedAddress = address.replace(" ", "+");
            console.log(process.env.REACT_APP_EATSTREET_API_KEY);
            console.log(process.env.REACT_APP_GOOGLE_API_KEY);

            axios
              .get(
                `https://api.eatstreet.com/publicapi/v1/restaurant/search?method=both&pickup-radius=50&street-address=${formattedAddress}&access-token=${
                  process.env.REACT_APP_EATSTREET_API_KEY
                }`
              )
              .then(stores =>
                this.setState({ stores: stores.data.restaurants })
              );
          });
        });
      },
      () => {
        // fail cb
        console.log("Failed to get location");
      }
    );
  };

  render() {
    const storeLabels = this.state.stores.map((store, i) => {
      const {
        apiKey,
        deliveryMin,
        foodTypes,
        hours,
        logoUrl,
        minWaitTime,
        maxWaitTime,
        name,
        offersDelivery,
        offersPickup,
        open,
        phone,
        streetAddress,
        state,
        zip,
        url
      } = store;

      return (
        <Store
          key={i}
          apiKey={apiKey}
          deliveryMin={deliveryMin}
          foodTypes={foodTypes}
          hours={hours}
          logoUrl={logoUrl}
          minWaitTime={minWaitTime}
          maxWaitTime={maxWaitTime}
          name={name}
          offersDelivery={offersDelivery}
          offersPickup={offersPickup}
          open={open}
          phone={phone}
          streetAddress={streetAddress}
          state={state}
          zip={zip}
          url={url}
        />
      );
    });

    return <div>{this.state.loading ? <p>Loading...</p> : storeLabels}</div>;
  }
}
