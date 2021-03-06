import { gql } from "@apollo/client";
// query for weather card component with name parameter.
export const WEATHER_QUERY = gql`
  query getCityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      weather {
        summary {
          description
          icon
          title
        }
        temperature {
          actual
        }
        wind {
          speed
        }
        clouds {
          humidity
        }
      }
    }
  }
`;
