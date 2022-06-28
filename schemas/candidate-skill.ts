import { graphql, list } from "@keystone-6/core";
import { image, text, select, checkbox, relationship, timestamp, virtual } from "@keystone-6/core/fields";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      skill: relationship({ ref: 'Skill', many: false }),
      fromDate: timestamp(),
      description: text()
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['skill', 'fromDate'],
      },
      isHidden: true
    },
  });