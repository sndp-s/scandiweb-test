/// libs ///
import React, { Component } from "react";
import { connect } from "react-redux/es/exports";

/// components ///
import {
  Wrapper,
  List,
  Item,
  ItemRightWrapper,
  ProductCounter,
  CounterButton,
  CounterLabel,
  OrderWrapper,
  OrderCalcGrid,
  OrderButton,
} from "./CartList.styles";
import ProductTitle from "../ProductTitle";
import ProductPrice from "../ProductPrice";
import Carousel from "../Carousel";
import ProductAttributes from "../ProductAttributes";
import LoadingSpinner from "../LoadingSpinner";

/// actions ///
import { loadCartItems } from "../../slices/cartSlice";

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderItems: [],
    };
  }

  componentDidMount() {
    this.props.loadCartItems();
  }

  componentDidUpdate(prevProps, prevState) {}

  render() {
    console.log(this.props.renderItems)
    return <>cart list</>;
    // const { pageStyle, renderItems, loading, hasErrors } = this.props;
    // if (renderItems.length === 0) return <h1>The Cart is Empty!</h1>;
    // else {
    // return (
    // <>Cart Items</>
    // <Wrapper pageStyle={pageStyle}>
    //   <List pageStyle={pageStyle}>
    //     {renderItems.map((renderItem) => {
    //       return (
    //         <Item pageStyle={pageStyle}>
    //           <div>
    //             <ProductTitle
    //               pageStyle={pageStyle}
    //               name={renderItem.name}
    //               brand={renderItem.brand}
    //             />
    //             {/* {console.log(renderItem)} */}
    //             {/* <ProductPrice pageStyle={pageStyle} price={price} /> */}
    //             <ProductAttributes
    //               pageStyle={pageStyle}
    //               attributes={renderItems.attributes}
    //             />
    //           </div>
    //           <ItemRightWrapper>
    //             <div>
    //               <ProductCounter pageStyle={pageStyle}>
    //                 <CounterButton pageStyle={pageStyle}>+</CounterButton>
    //                 <CounterLabel pageStyle={pageStyle}>2</CounterLabel>
    //                 <CounterButton pageStyle={pageStyle}>-</CounterButton>
    //               </ProductCounter>
    //             </div>
    //             {/* <Carousel pageStyle={pageStyle} gallery={gallery} /> */}
    //           </ItemRightWrapper>
    //         </Item>
    //       );
    //     })}
    //   </List>

    //   <OrderWrapper>
    //     <OrderCalcGrid>
    //       <span className="label">Tax 21%:</span>
    //       <span className="value">$42.00</span>
    //       <span className="label">Quantity:</span>
    //       <span className="value">3</span>
    //       <span className="label">Total:</span>
    //       <span className="value">$200.00</span>
    //     </OrderCalcGrid>
    //     <OrderButton>Order</OrderButton>
    //   </OrderWrapper>
    // </Wrapper>
    // );
    // }
  }
}

const mapStateToProps = (state) => {
  const { cartItems, products } = state.cart;
  let renderItems = [];

  if (cartItems.length === 0) return { renderItems };

  cartItems.forEach((cartItem, index) => {
    if (index === 0) {
      const newRenderItem = {
        product: products[cartItems[0].id],
        count: 1,
        selectedAttributes: cartItems[0].attributes,
      };
      renderItems.push(newRenderItem);
    } else {
      const icartItemInRenderItems = renderItems.findIndex((renderItem) => {
        return (
          renderItem.product.id === cartItem.id &&
          JSON.stringify(renderItem.selectedAttributes) ===
            JSON.stringify(cartItem.attributes)
        );
      });
      if (icartItemInRenderItems === -1) {
        const newRenderItem = {
          product: products[cartItems[0].id],
          count: 1,
          selectedAttributes: cartItem.attributes,
        };
        renderItems.push(newRenderItem);
      } else {
        renderItems[icartItemInRenderItems].count += 1;
      }
    }
  });

  return { renderItems };
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCartItems: () => dispatch(loadCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
