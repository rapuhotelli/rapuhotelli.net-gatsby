import React from 'react';
import throttle from 'lodash/throttle';

export default class ScrollWrapper extends React.Component{

  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.props.onWindowScroll()
  }

  render() {
    return this.props.children;
  }

  componentDidMount() {
    if (this.props.onWindowScroll) window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    console.log('unmounted');
    if (this.props.onWindowScroll) window.removeEventListener("scroll", this.handleScroll);
  }
}
