import React, { Component } from "react";
import MenuSection from "../MenuSection/MenuSection";
import axios from "axios";
import "./Menu.css";

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
    const { items } = this.state;
    let itemList;
    items &&
      (itemList = items.map(val => {
        const { apiKey, name, items } = val;

        return <MenuSection sectionKey={apiKey} section={name} items={items} />;
      }));

    return <div className="menu">{itemList}</div>;
  }
}
