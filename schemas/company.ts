import { list } from "@keystone-6/core";
import { checkbox, image, relationship, text, file} from "@keystone-6/core/fields";
import address_fields from './address_fields';


export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      name: text({
        validation: { isRequired: true },
      }),
      positions: relationship({ ref: 'Position.company', many: true }),
      addresses: relationship({ 
          ref: 'Address', 
          ui: {
            displayMode: 'cards',
            cardFields: ['addressCountry', 'addressLocality'],
            inlineEdit: { fields: ['addressCountry', 'addressLocality'] },
            linkToItem: false,
            inlineConnect: false,
            inlineCreate: { fields: ['addressCountry', 'addressLocality', 'postOfficeBoxNumber', 'streetAddress'] },
          },
          many: true 
      }),
      contacts: relationship({ 
        ref: 'Contact', 
        ui: {
          displayMode: 'cards',
          cardFields: ['name', 'surname'],
          inlineEdit: { fields: ['name', 'surname'] },
          linkToItem: false,
          inlineConnect: true,
          inlineCreate: { fields: ['name', 'surname'] },
        },
        many: true 
      }),
      contracts: file({ storage: 'company_contract',  }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      labelField: 'name',
      listView: {
        initialColumns: ['name', 'contacts'],
        defaultFieldMode: 'read'
      },
      itemView: { 
        defaultFieldMode: 'edit'
      },
      hideDelete: ({ session, context }) => {
        // console.log(session)
        return false
      },
      
      
    },
    description: "",
    

  });