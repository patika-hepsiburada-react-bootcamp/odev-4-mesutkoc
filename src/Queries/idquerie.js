import { gql } from "@apollo/client";

//query for detail component with id parameter.
export const GET_CITY_DETAIL_BY_ID = gql`
  query getCityById($id: [String!]) {
    getCityById(id: $id) {
      name
      country
      coord {
        lon
        lat
      }
      weather {
        summary {
          description
          icon
          title
        }
        temperature {
          actual
          min
          max
          feelsLike
        }
        wind {
          speed
          deg
        }
        clouds {
          humidity
        }
      }
    }
  }
`;
