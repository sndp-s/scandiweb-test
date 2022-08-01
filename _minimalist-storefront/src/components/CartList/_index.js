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
    this.updateRenderItems = this.updateRenderItems.bind(this);
    this.state = {
      cartItems: [],
      products: {},
      renderItems: [],
    };
  }

  updateRenderItems = () => {
    const { cartItems, products } = this.props.cart;
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

    this.setState({
      ...this.state,
      renderItems: renderItems,
    });
  };

  componentDidMount() {
    this.props.loadCartItems();
    const { cartItems, products } = this.props.cart;
    this.setState({
      ...this.state,
      cartItems: cartItems,
      products: products,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const currentCart = this.props.cart;

    if (
      JSON.stringify(currentCart.products) !==
        JSON.stringify(currentCart.products) ||
      currentCart.cartItems.length !== prevState.cartItems.length
    ) {
      this.props.loadCartItems();
      this.updateRenderItems();
      
    }

  }

  render() {
    console.log(this.props);
    // const { renderItems } = this.state;
    // const { pageStyle } = this.props;
    return (
      <>cart list</>
      // <Wrapper pageStyle={pageStyle}>
      //   <List pageStyle={pageStyle}>
      //     {renderItems.map((renderItem, index) => {
      //       return (
      //         <Item pageStyle={pageStyle} key={index}>
      //           <div>
      //             <ProductTitle
      //               pageStyle={pageStyle}
      //               name={renderItem.product.name}
      //               brand={renderItem.product.brand}
      //             />
      //             {/* <ProductPrice pageStyle={pageStyle} price={price} /> */}
      //             <ProductAttributes
      //               pageStyle={pageStyle}
      //               attributes={renderItem.product.attributes}
      //             />
      //           </div>
      //           <ItemRightWrapper>
      //             <div>
      //               <ProductCounter pageStyle={pageStyle}>
      //                 <CounterButton pageStyle={pageStyle}>+</CounterButton>
      //                 <CounterLabel pageStyle={pageStyle}>
      //                   {renderItem.count}
      //                 </CounterLabel>
      //                 <CounterButton pageStyle={pageStyle}>-</CounterButton>
      //               </ProductCounter>
      //             </div>
      //             <Carousel
      //               pageStyle={pageStyle}
      //               gallery={renderItem.product.gallery}
      //             />
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
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadCartItems: () => dispatch(loadCartItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
