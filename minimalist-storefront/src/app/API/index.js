/////////////////////////////////////////////////////////////////////////
///////// libs /////////
import { request, gql } from "graphql-request";
/////////////////////////////////////////////////////////////////////////
///////// data /////////
export const URI = `http://localhost:4000`;
/////////////////////////////////////////////////////////////////////////
const categoriesNameQuery = gql`
  {
    categories {
      name
    }
  }
`;
export const fetchCategoriesNames = async () => {
  try {
    const data = await request(URI, categoriesNameQuery);
    return data.categories;
  } catch (error) {
    return error;
  }
};
/////////////////////////////////////////////////////////////////////////
const currenciesQuery = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
export const fetchCurrenciesAPI = async () => {
  try {
    const data = await request(URI, currenciesQuery);
    return data;
  } catch (error) {
    return error;
  }
};
/////////////////////////////////////////////////////////////////////////
const categoriesQuery = gql`
  {
    categories {
      name
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
export const fetchCategoriesAPI = async () => {
  try {
    const data = await request(URI, categoriesQuery);
    return data;
  } catch (error) {
    return error;
  }
};
/////////////////////////////////////////////////////////////////////////
