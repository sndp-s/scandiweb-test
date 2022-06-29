///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// actions /////////
import { fetchPosts } from "../../features/store/slices/posts";

class Playground extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <div style={{ padding: "100px 300px" }}>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p>{post.title}</p>
              <br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.posts;
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
