import React, { Component } from "react";
import axios from "axios";
import "./Post.scss";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: "",
      author_pic: "",
      title: "",
      img: "",
      content: "",
      loading: true,
    };
  }

  componentDidMount() {
    axios.get(`/api/post/${this.props.match.params.id}`).then((res) => {
      this.setState({ ...res.data, loading: false });
    });
  }

  render() {
    let imgSrc = this.state.img;

    return (
      <div className="Post">
        {!this.state.loading && this.state.title ? (
          <div className="post-main">
            <div className="img-divider">
            <img className="post-img" src={imgSrc} alt="post" />
            </div>
            <div className="post-header">
              <h2 className="title">{this.state.title}</h2>
              <div className="author-box">
                <p>by {this.state.author}</p>
                <img src={this.state.author_pic} alt='author' />
              </div>
                <div className="post-content-box">
              <p>{this.state.content}</p>
            </div>
            </div>
            
          </div>
        ) : !this.state.loading ? (
          <div className="oops-box">
            <h2 className="title">Oops!</h2>
            <p>Looks like this post doesn't exist anymore</p>
          </div>
        ) : (
          <div className="load-box">
            <div className="load-background"></div>
            <div className="load"></div>
          </div>
        )}
      </div>
    );
  }
}

export default Post;
