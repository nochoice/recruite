import { list } from "@keystone-6/core";
import { checkbox, relationship, text } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      title: text({
        validation: { isRequired: true },
      }),
      company: relationship({ ref: 'Company.positions', many: false }),
      description: document({
        // componentBlocks: true,
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      active: checkbox()
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['title', 'company', 'active'],
      },
    },
  });