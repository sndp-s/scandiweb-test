/// libs ///
import React, { Component } from "react";

/// components ///
import {
  ImgWrapper,
  ProductImage,
  ImgSwipeLeft,
  ImgSwipeRight,
} from "./Carousel.styles.js";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.handleForwardClick = this.handleForwardClick.bind(this);
    this.handleBackwardClick = this.handleBackwardClick.bind(this);
    this.state = {
      min: 0,
      max: this.props.gallery.length,
      curr: 0,
    };
  }

  handleBackwardClick = () => {
    const { min, curr } = this.state;
    if (curr > min) {
      this.setState({
        ...this.state,
        curr: curr - 1,
      });
    }
  };

  handleForwardClick = () => {
    const { max, curr } = this.state;
    if (curr < max - 1) {
      this.setState({
        ...this.state,
        curr: curr + 1,
      });
    }
  };

  render() {
    const { pageStyle, gallery } = this.props;
    return (
      <>
        <ImgWrapper pageStyle={pageStyle}>
          <ProductImage src={gallery[this.state.curr]} pageStyle={pageStyle} />
          <ImgSwipeLeft
            pageStyle={pageStyle}
            onClick={() => this.handleBackwardClick()}
          />
          <ImgSwipeRight
            pageStyle={pageStyle}
            onClick={() => this.handleForwardClick()}
          />
        </ImgWrapper>
      </>
    );
  }
}

export default Carousel;
