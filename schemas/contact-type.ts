import { list } from "@keystone-6/core";
import { image, text, select, checkbox } from "@keystone-6/core/fields";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      type: select({
        type: 'enum',
        options: [
          { label: 'Mobile', value: 'mobile' },
          { label: 'Email', value: 'email' }
        ]
      }),
      isPrimary: checkbox(),
      content: text(),
      description: text()
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['type', 'content'],
      },
    },
  });