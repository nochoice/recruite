import { list } from "@keystone-6/core";
import { checkbox, relationship, text } from "@keystone-6/core/fields";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      name: text({
        validation: { isRequired: true },
      }),
      isComplete: checkbox(),
      isObsolet: checkbox(),
      addresses: relationship({ 
          ref: 'Address', 
          ui: {
            displayMode: 'cards',
            cardFields: ['addressCountry', 'addressLocality'],
            inlineEdit: { fields: ['addressCountry', 'addressLocality'] },
            linkToItem: false,
            inlineConnect: false,
            inlineCreate: { fields: ['addressCountry', 'addressLocality'] },
          },
          many: true 
      }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      labelField: 'name',
      listView: {
        initialColumns: ['id', 'name'],
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
    description: "Pomocoxcxu",

  });