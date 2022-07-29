/// libs ///
import React, { Component } from "react";
import { withRouter } from "react-router";

/// components ///
import { Wrapper, Content, Title } from "./Category.styles";
import ProductGrid from "./ProductGrid";

class Category extends Component {
  render() {
    const category = this.props.match.path.slice(1);
    return (
      <Wrapper>
        <Content className="container">
          <Title>{category}</Title>
          <ProductGrid category={category} />
        </Content>
      </Wrapper>
    );
  }
}

export default withRouter(Category);
