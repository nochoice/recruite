import { list } from "@keystone-6/core";
import { image, integer, password, relationship, text } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      name: text({ validation: { isRequired: true } }),
      firstName: text(),
      lastName: text(),
      image: image({ storage: 'my_local_images' }),
      phone: text(),
      linkedIn: text(),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      description: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      // The password field takes care of hiding details and hashing values
      password: password({ validation: { isRequired: true } }),
      watching: relationship(
        { 
          ref: 'Candidate.watching', 
          many: true,
          ui: {
            hideCreate: true,
            displayMode: 'count'
          }
        }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'firstName', 'lastName'],
      },
    },
  });