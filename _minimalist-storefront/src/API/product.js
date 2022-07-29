import { request, gql } from "graphql-request";

export const URI = `http://localhost:4000`;

////////////////////////////////////////////////////////////////////////
const productQuery = (productId) => {
  return gql`
    {
      product(id: "${productId}") {
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }  
        id
        description
        name
        brand
        inStock
        gallery
        prices {
        currency {
            symbol
        }
        amount
        }
      }
    }
  `;
};

export const fetchProduct = async (productId) => {
  try {
    const data = await request(URI, productQuery(productId));
    return data.product;
  } catch (error) {
    return error;
  }
};
////////////////////////////////////////////////////////////////////////
