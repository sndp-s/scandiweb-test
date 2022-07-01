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
    return "unable to fetch catergory names :(";
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
export const fetchCurrencies = async () => {
  try {
    const data = await request(URI, currenciesQuery);
    return data;
  } catch (error) {
    return error;
  }
};
/////////////////////////////////////////////////////////////////////////
export const fetchCategoryProducts = async () => {
  return [];
};
/////////////////////////////////////////////////////////////////////////
