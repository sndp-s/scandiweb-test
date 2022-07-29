/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux/es/exports";

/// components ///
import ProductAttribute from "./ProductAttribute";

/// actions ///
import { holdItem, setOption } from "../../slices/cartSlice";

class ProductAttributes extends Component {
  constructor(props) {
    super(props);
    this.setAttributeOption = this.setAttributeOption.bind(this);
    this.holdItemTemporarily = this.holdItemTemporarily.bind(this);
  }

  setAttributeOption = (selectedOptionDetails) => {
    this.props.setOption(selectedOptionDetails);
  };

  holdItemTemporarily() {
    let product = {
      id: this.props.productId,
      attributes: {},
    };
    this.props.attributes.forEach((attribute) => {
      product.attributes[attribute.id] = {
        id: attribute.id,
      };
    });
    this.props.holdItem(product);
  }

  componentDidMount() {
    this.holdItemTemporarily();
  }

  componentDidUpdate() {
    this.holdItemTemporarily();
  }

  render() {
    const { attributes, pageStyle, inStock } = this.props;
    return (
      <>
        {attributes.map((attribute, index) => (
          <ProductAttribute
            key={index}
            attribute={attribute}
            pageStyle={pageStyle}
            inStock={inStock}
            setAttributeOption={this.setAttributeOption}
          />
        ))}
      </>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  holdItem: (product) => dispatch(holdItem(product)),
  setOption: (selectedOptionDetails) =>
    dispatch(setOption(selectedOptionDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductAttributes);
