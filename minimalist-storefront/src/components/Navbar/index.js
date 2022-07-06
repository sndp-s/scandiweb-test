///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchCategories,
  setCurrentCategory,
} from "../../features/categoriesSlice";

///////// components ////////
import { OptionsBar, Option } from "./Navbar.styles";

class Navbar extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categoryNames, setCurrentCategory } = this.props;

    return (
      <OptionsBar>
        {categoryNames.map((categoryName, index) => (
          <Option
            id={categoryName}
            key={index}
            onClick={(e) => setCurrentCategory(e.target.id)}
          >
            {categoryName}
          </Option>
        ))}
      </OptionsBar>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  const categoryNames = categories.categories.map((category) => category.name);
  return { categoryNames };
};
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  setCurrentCategory: (category) => dispatch(setCurrentCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
