import React, { Component } from "react";

// components
import { Wrapper, Label, List, Item } from "./ProductInfoAttribute.styles";

class ProductInfoAttribute extends Component {
  render() {
    const {
      pageStyle,
      id = "",
      items = [],
      name = "",
      type,
    } = this.props.attribute;

    return (
      <Wrapper pageStyle={pageStyle}>
        <Label pageStyle={pageStyle}>{name}:</Label>
        <List pageStyle={pageStyle}>
          {items.map((item, index) => {
            const { displayValue, id, value } = item;
            return (
              <Item key={index} pageStyle={pageStyle} value={value} id={id}>
                {displayValue}
              </Item>
            );
          })}
        </List>
      </Wrapper>
    );
  }
}

export default ProductInfoAttribute;
