///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import ProductListingPage from "../ProductListingPage";

///////// actions /////////
import { fetchPosts } from "../../features/store/slices/posts";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    console.log(this.props);
    return (
      // <ProductListingPage />
      <div style={{ padding: "100px 300px" }}>
        {/* <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <p>{post.title}</p>
              <br />
            </li>
          ))}
        </ul> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
