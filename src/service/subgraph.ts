import { gql } from 'graphql-request';

const ZETA_NAMEHASH =
  '0x4c1ec05bdc3ef5e1b7c37e350b926690b2fdaba933c1c608ab5e03737097cd79';

export const GET_DOMAINS = gql`
  query getDomains($tokenId: String) {
    domain(id: $tokenId) {
      id
      name
      labelName
      createdAt,
      registeredAt,
      expiryDate
      owner {
        id
      }
    }
  }
`;