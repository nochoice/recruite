import { gql } from '@keystone-6/core/admin-ui/apollo';

export const QUERY_GET_USER =  gql`
query GetUser($id: ID) {
  user(where: {id: $id}) {
    id
    name
    firstName
    lastName
    phone
    email
    linkedIn
    description {
      document
    }
    image {
      url
    }
  }
}

`;

export const QUERY_COMPANIES_OPTIONS = gql`{
    companies {
        name
        id
    }
}`