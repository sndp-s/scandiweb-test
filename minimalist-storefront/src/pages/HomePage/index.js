///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import ProductListingPage from "../ProductListingPage";

///////// actions /////////
import { fetchPosts } from "../../features/store/slices/posts";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      // <ProductListingPage />
      <div style={{ padding: "100px 300px" }}>
        {posts.map((post) => (
          <>
            <p>{post.title}</p>
            <br />
          </>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => state.posts;
// const mapDispatchToProps = (dispatch) => dispatch;

export default connect(mapStateToProps)(HomePage);
