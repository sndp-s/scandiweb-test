///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// actions /////////
// import { fetchPosts } from "../../features/playground/postsSlice";
import { fetchCategories } from "../../features/categoriesSlice";

///////// pages /////////
import ApolloDemo from "./ApolloDemo";

class Playground extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchCategories();
  }
  render() {
    const { categories } = this.props;
    return (
      // <ApolloDemo />
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

const mapStateToProps = (state) => state.categories;
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playground);
