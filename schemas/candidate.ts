import { list } from "@keystone-6/core";
import { relationship, text } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";

export default list({
    // Here are the fields that `User` will have. We want an email and password so they can log in
    // a name so we can refer to them, and a way to connect users to posts.
    fields: {
      name: text({
        validation: { isRequired: true },
      }),
      surname: text({
        validation: { isRequired: true },
      }),
      email: text(
        {
          isIndexed: 'unique',
        }
      ),
      phone: text(),
      linkedIn: text(),
      description: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      watching: relationship({ ref: 'User.watching', many: true }),
      skills: relationship({ 
        ref: 'CandidateSkill', 
        many: true,
        ui: {
          displayMode: 'cards',
          cardFields: ['skill', 'fromDate'],
          inlineCreate: { fields: ['skill', 'fromDate'] },
        }
      }),
      documents: relationship({ 
        ref: 'CandidateDocument', 
        many: true
      }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['surname', 'name', 'phone', 'email'],
      }
    },
  });