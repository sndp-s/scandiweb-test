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
    // this.updateRenderItems = this.updateRenderItems.bind(this);
    this.state = {
      renderItems: [],
    };
  }

  componentDidMount = async () => {
    await this.props.loadCartItems();
    //   this.updateRenderItems();
  };

  // when component re-renders
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart.products !== this.props.cart.products) {
      // calculate renderItems and update local state
      const { cartItems, products } = this.props.cart;

      cartItems.forEach((cartItem, index) => {
        if (index === 0) {
          this.setState({
            renderItems: [
              {
                count: 1,
                selectedAttributes: cartItem.attributes,
                product: products[cartItem.id],
              },
            ],
          });
        } else {
          const iCartItemInRenderItems = this.state.renderItems.find(
            (renderItem) => renderItem.id === cartItem.id
          );
          if (
            iCartItemInRenderItems !== -1 &&
            cartItem.attributes ===
              this.state.renderItems[iCartItemInRenderItems].selectedAttributes
          ) {
            let temp = this.state.renderItems;
            temp[iCartItemInRenderItems].count += 1;
            this.setState(temp);
          } else {
            this.setState({
              renderItems: [
                ...this.state.renderItems,
                {
                  count: 1,
                  selectedAttributes: cartItem.attributes,
                  product: products[cartItem.id],
                },
              ],
            });
          }
        }
      });
    }
    console.log(this.state.renderItems);
  }

  render() {
    const { cartItems, products } = this.props.cart;

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
