import { list } from "@keystone-6/core";
import { relationship, text, timestamp } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      title: text({
        validation: { isRequired: true },
      }),
      date: timestamp({
        validation: {isRequired: true}
      }),
      canditate: relationship({ ref: 'Candidate' }),
      company: relationship({ ref: 'Company' }),
      contact: relationship({ ref: 'Contact' }),
      position: relationship({ ref: 'Position' }),
      description: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      })
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      itemView: {
        defaultFieldMode: 'hidden'
      },
      listView: {
        initialColumns: ['title'],

      },
    },
  });