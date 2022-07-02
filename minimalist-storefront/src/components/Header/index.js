///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components /////////
import {
  Wrapper,
  Content,
  OptionsBar,
  Option,
  Logo,
  RightSideWrapper,
} from "./Header.styles";
import CurrencyDropdown from "../CurrencyDropdown";
import CartDropdown from "../CartDropdown";

///////// thunk /////////
import {
  fetchCategories,
  setCurrentCatergory,
} from "../../features/categoriesSlice";

class Header extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  optionClickHandler = (event, setCurrentCatergory) => {
    const currentCategory = event.target.id;
    setCurrentCatergory(currentCategory);
  };
  render() {
    const { setCurrentCatergory } = this.props;
    const { categories, loading, hasErrors } = this.props.categories;
    return (
      <Wrapper>
        <Content className="container">
          <OptionsBar>
            {loading && <h1>loading</h1> /* tofo: handle this globally*/}
            {hasErrors && (
              <h1>ERROR :(</h1>
            ) /* todo: handle this in another way*/}
            {categories.map((category, index) => (
              <Option
                id={category.name}
                key={index}
                onClick={(event) =>
                  this.optionClickHandler(event, setCurrentCatergory)
                }
              >
                {category.name}
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

const mapStateToProps = ({ categories }) => ({ categories });
const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  setCurrentCatergory: (currentCategory) =>
    dispatch(setCurrentCatergory(currentCategory)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
