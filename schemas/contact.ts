import { list } from "@keystone-6/core";
import { image, relationship, text } from "@keystone-6/core/fields";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
        image: image({ storage: 'my_local_images' }),
        name: text({
            validation: { isRequired: true },
        }),
        surname: text({
            validation: { isRequired: true },
        }),
        description: text(),
        phone: text(),
        email: text(
            {isIndexed: 'unique'}
        ),
        // contacts: relationship({ 
        //     ref: 'ContactType', 
        //     ui: {
        //       displayMode: 'cards',
        //       cardFields: ['type', 'content'],
        //     //   inlineEdit: { fields: ['addressCountry', 'addressLocality'] },
        //       linkToItem: false,
        //       inlineConnect: true,
        //     //   inlineCreate: { fields: ['addressCountry', 'addressLocality', 'postOfficeBoxNumber', 'streetAddress'] },
        //     },
        //     many: true 
        //   }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['name', 'surname'],
      },
    },
  });