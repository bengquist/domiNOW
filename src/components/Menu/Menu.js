import React, { Component } from "react";
import axios from "axios";

export default class Menu extends Component {
  state = {
    loading: true,
    items: []
  };

  componentDidMount() {
    const { apiKey } = this.props.match.params;

    axios
      .get(
        `https://api.eatstreet.com/publicapi/v1/restaurant/${apiKey}/menu?includeCustomizations=true&access-token=${
          process.env.REACT_APP_EATSTREET_API_KEY
        }`
      )
      .then(items => this.setState({ items: items.data, loading: false }));
  }

  render() {
    console.log(this.state.items);

    return <div>Menu</div>;
  }
}
