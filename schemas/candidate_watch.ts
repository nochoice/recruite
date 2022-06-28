import { list } from "@keystone-6/core";
import { relationship } from "@keystone-6/core/fields";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      users: relationship({ ref: 'User.watching', many: true, }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['users'],
      },
    },
  });