import React, { Component } from "react";
import PropTypes from "prop-types";
import Geocode from "react-geocode";
import PizzaApi from "dominos";

export default class Location extends Component {
  state = {
    loading: true,
    address: ""
  };

  componentDidMount() {
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

    Geocode.enableDebug();

    this.getAddress().then(() => {
      PizzaApi.Util.findNearbyStores("63102", "Delivery", storeData =>
        console.log(storeData)
      );
    });
  }

  getAddress = () => {
    let lat = PropTypes.number;
    let long = PropTypes.number;

    navigator.geolocation.getCurrentPosition(
      position => {
        // success cb
        lat = position.coords.latitude;
        long = position.coords.longitude;
        let address = "";

        Geocode.fromLatLng(lat, long).then(response => {
          address = response.results[0].formatted_address;

          this.setState({ loading: false, address }, () =>
            console.log(lat, long, address)
          );
        });
      },
      () => {
        // fail cb
        console.log("Failed to get location");
      }
    );
  };

  render() {
    return <div>Location</div>;
  }
}
