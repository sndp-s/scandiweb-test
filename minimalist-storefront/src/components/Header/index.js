///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import {
  Wrapper,
  Content,
  OptionsBar,
  Option,
  OptionLink,
  Logo,
  RightSideWrapper,
} from "./Header.styles";
import CurrencyDropdown from "../CurrencyDropdown";
import CartDropdown from "../CartDropdown";

///////// reducers /////////
import { fetchCategories } from "../../features/categoriesSlice";

class Header extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { loading, hasErrors, categories } = this.props.categories;
    return (
      <Wrapper>
        <Content className="container">
          <OptionsBar>
            {/* <Option>
              <OptionLink href="#">WOMEN</OptionLink>
            </Option>
            <Option>
              <OptionLink href="#">MEN</OptionLink>
            </Option>
            <Option>
              <OptionLink href="#">KIDS</OptionLink>
            </Option> */}
            {loading && <h1>loading</h1>}
            {hasErrors && <h1>ERROR :(</h1>}
            {categories.map((category, index) => (
              <Option key={index}>
                <OptionLink href="#">{category.name}</OptionLink>
              </Option>
            ))}
          </OptionsBar>
          <a href="/">
            <Logo />
          </a>
          <RightSideWrapper>
            <CurrencyDropdown />
            <CartDropdown />
          </RightSideWrapper>
        </Content>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
