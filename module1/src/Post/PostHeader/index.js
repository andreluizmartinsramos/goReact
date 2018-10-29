import React, { Component } from "react";
import "./styles.css";

class PostHeader extends Component {
  render() {
    const { user, time } = this.props.info;

    return (
      <div className="wrapper__postHeader">
        <div className="avatar"> </div>
        <div className="title">
          <h2>{user}</h2>
          <span>{time}</span>
        </div>
      </div>
    );
  }
}

export default PostHeader;
