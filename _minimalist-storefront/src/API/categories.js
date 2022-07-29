import { request, gql } from "graphql-request";

export const URI = `http://localhost:4000`;

////////////////////////////////////////////////////////////////////////
const categoriesQuery = gql`
  {
    categories {
      name
    }
  }
`;

export const fetchCategories = async () => {
  try {
    const data = await request(URI, categoriesQuery);
    return data.categories;
  } catch (error) {
    return error;
  }
};
////////////////////////////////////////////////////////////////////////
