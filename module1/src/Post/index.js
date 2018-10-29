import React, { Component } from "react";
import "./styles.css";
import PostHeader from "./PostHeader";

class Post extends Component {
  render() {
    const { desc, ...headerPost } = this.props.post;

    return (
      <div className="post">
        <PostHeader info={headerPost} />

        <p>{desc}</p>
      </div>
    );
  }
}

export default Post;
