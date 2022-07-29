import { request, gql } from "graphql-request";

export const URI = `http://localhost:4000`;

////////////////////////////////////////////////////////////////////////
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
    return data.currencies;
  } catch (error) {
    return error;
  }
};
////////////////////////////////////////////////////////////////////////
