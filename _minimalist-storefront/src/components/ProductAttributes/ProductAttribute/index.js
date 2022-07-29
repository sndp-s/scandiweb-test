///  libs ///
import React, { Component } from "react";

/// components ///
import { Wrapper, Label, List, Item } from "./ProductAttribute.styles";

class ProductAttribute extends Component {
  constructor(props) {
    super(props);
    this.handleAttributeClick = this.handleAttributeClick.bind(this);
    this.state = {
      selectedAttributeDetails: { attributeId: "", selectedOptionId: "" },
    };
  }

  handleAttributeClick = (event) => {
    const { attribute } = this.props;
    const optionId = event.target.id;
    const selectedAttributeDetails = {
      attributeId: attribute.id,
      selectedOptionId: optionId,
    };
    this.setState({
      selectedAttributeDetails,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selectedAttributeDetails !== this.state.selectedAttributeDetails
    ) {
      this.props.setAttributeOption(this.state.selectedAttributeDetails);
    }
  }

  render() {
    const { id, items, name, type } = this.props.attribute;
    const { pageStyle } = this.props;
    return (
      <Wrapper pageStyle={pageStyle} id={id}>
        <Label pageStyle={pageStyle}>{name}:</Label>
        <List pageStyle={pageStyle}>
          {items.map((item, index) => {
            const { displayValue, id, value } = item;
            return (
              <Item
                key={index}
                pageStyle={pageStyle}
                value={value}
                type={type}
                id={id}
                onClick={(event) => {
                  this.props.inStock && this.handleAttributeClick(event);
                }}
                isSelected={
                  this.state.selectedAttributeDetails.selectedOptionId === id
                }
              >
                {type === "text" && displayValue}
              </Item>
            );
          })}
        </List>
      </Wrapper>
    );
  }
}

export default ProductAttribute;
