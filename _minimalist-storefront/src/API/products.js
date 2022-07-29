import { request, gql } from "graphql-request";

export const URI = `http://localhost:4000`;

////////////////////////////////////////////////////////////////////////
const productsQuery = (categoryName) => {
  return gql`
    {
      category(input: { title: "${categoryName}" }) {
        products {
          id
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
    }
  `;
};

export const fetchProducts = async (categoryName) => {
  try {
    const data = await request(URI, productsQuery(categoryName));
    return data.category.products;
  } catch (error) {
    return error;
  }
};
////////////////////////////////////////////////////////////////////////
