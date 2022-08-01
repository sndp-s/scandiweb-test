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
import { renderIntoDocument } from "react-dom/test-utils";

class CartList extends Component {
  constructor(props) {
    super(props);
    // this.updateRenderItems = this.updateRenderItems.bind(this);
    this.state = {
      renderItems: [],
    };
  }

//   updateRenderItems = () => {
//     // console.log("updateRenderItems called");
//     const { cartItems, products } = this.props.cart;
//     const { renderItems } = this.state;

//     const newRenderItems = [];
//     cartItems.forEach((cartItem, index) => {
//       const icartItemInRenderItems = renderItems.findIndex((renderItem) => {
//         return (
//           renderItem.product.id === cartItem.id &&
//           JSON.stringify(renderItem.selectedAttributes) ===
//             JSON.stringify(cartItem.attributes)
//         );
//       });
//       if (icartItemInRenderItems === -1) {
//         newRenderItems.push({
//           product: products[cartItem.id],
//           selectedAttributes: cartItem.attributes,
//           count: 1,
//         });
//       } else {
//         const updatedCountObject = renderItems[icartItemInRenderItems];
//         updatedCountObject.count += 1;
//         newRenderItems = [...renderItems];
//         newRenderItems[icartItemInRenderItems] = updatedCountObject;
//         this.setState({
//           renderItems: newRenderItems,
//         });
//       }
//     });
//   };

    componentDidMount = async () => {
      await this.props.loadCartItems();
    //   this.updateRenderItems();
    };

  //   async componentDidUpdate(prevProps, prevState) {
  //     // fetch products on changes in cart item quantity
  //     const { cartItems, products } = this.props.cart;
  //     if (cartItems.length > prevProps.cart.cartItems.length) {
  //       await this.props.loadCartItems();
  //       this.updateRenderItems();
  //     }

  //     // if (
  //     //   JSON.stringify(prevProps.cart.products) !==
  //     //   JSON.stringify(products)
  //     // ) {
  //     //   this.updateRenderItems();
  //     // }
  //   }

  render() {
    const { cartItems, products } = this.props.cart;

    // console.log("state ", this.state);
    // console.log("cartItems", cartItems);
    // console.log("products", products);
    // console.log("============================================================================");

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
