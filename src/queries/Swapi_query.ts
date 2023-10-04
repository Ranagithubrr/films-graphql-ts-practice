import { gql } from "../__generated__";

export const GET_FILMS = gql(/* GraphQL */ `
query Film {
    allFilms {
      films {
        id      
        producers
        releaseDate
        title
        director
        created
        episodeID
      }
    }
  }
`);