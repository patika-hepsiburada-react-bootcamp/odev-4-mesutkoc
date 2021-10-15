import { gql } from "@apollo/client";

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
