import React, { Component } from "react";
import axios from "axios";
// import { Switch } from "react-router";
export default class record extends Component {
  state = { news: [] };

  componentWillMount() {
    return this.request(this.state.start, this.state.end);
  }
  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${team}`).then((response) => {
        this.setState({ teams: response.data });
      });
    }
    axios.get(`${article}?_start=${start}&_end=${end}`).then((response) => {
      this.setState({ items: [...this.state.items, ...response.data] });
    });
  };
  renderNews = (type) => {
    const temp = null;
    switch (type) {
      case "add":
        temp = this.state.map((item, i) => {
          return <div>{item.fname}</div>;
        });
        break;
      default:
        temp = null;
    }
    return temp;
  };
  render() {
    console.log(this.state.news);
    return <div>{this.renderNews(this.props.type)}</div>;
  }
}
