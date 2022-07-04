///////// libs /////////
import React, { Component } from "react";
import { connect } from "react-redux";

///////// components ////////
import { OptionsBar, Option } from "./Navbar.styles";

///////// context /////////
import CategoriesContext from "../../app/context/CategoriesContext";

class Navbar extends Component {
  //   optionClickHandler = (event, setCurrentCatergory) => {
  //     const currentCategory = event.target.id;
  //     setCurrentCatergory(currentCategory);
  //   };
  render() {
    return {
      /* <OptionsBar>
          <Option
            onClick={(event) =>
              this.optionClickHandler(event, setCurrentCatergory)
            }
          >
            name
          </Option>
          <Option
            onClick={(event) =>
              this.optionClickHandler(event, setCurrentCatergory)
            }
          >
            name
          </Option>
          <Option>name</Option>
        </OptionsBar> */
    };
  }
}

export default Navbar;
