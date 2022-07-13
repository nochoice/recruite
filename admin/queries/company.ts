import { gql } from '@keystone-6/core/admin-ui/apollo';

export const QUERY_COMPANY =  gql`
query GetSingleCompany($id: ID) {
    company(
     where: {id: $id}
   ) {
     id
     name
     logo {
       url
     }
     addresses {
       addressCountry
       addressLocality
       postalCode
       streetAddress
     }
     contacts {
       name
       surname
       id
       email
       phone
       description
     }
     positions (
       where:{active: {equals: true}}
     ){
       title
       id
       active
       contacts {
        id
        name
        surname
      }
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