/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

/// components ///
import { OptionsList, Option } from "./Navbar.styles";

/// reducers ///
import { getCategories } from "../../../slices/categoriesSlice";

class Navbar extends Component {
  componentDidMount() {
    this.props.getCategories();
  }
  render() {
    const { loading, hasErrors, categories, history } = this.props;
    return (
      <OptionsList>
        {!loading &&
          !hasErrors &&
          categories.map((category, index) => (
            <Option
              id={category.name}
              key={index}
              onClick={() => history.push(`/${category.name}`)}
            >
              {category.name}
            </Option>
          ))}
      </OptionsList>
    );
  }
}

const mapStateToProps = (state) => state.categories;

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
