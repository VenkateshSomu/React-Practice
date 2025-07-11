import React, { Component } from "react";
import axios from "axios";

class ClassFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <>
        <h2>Posts List</h2>
        <ul>
          {this.state.posts?.length &&
            this.state.posts.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })}
        </ul>
      </>
    );
  }
}
export default ClassFetching;
