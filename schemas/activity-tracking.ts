import { list } from "@keystone-6/core";
import { json, relationship, text, timestamp } from "@keystone-6/core/fields";

export default list({
    fields: {
        operation: text(),
        schemaKey: text(),
        user: relationship({ref: 'User'}),
        data: json(),
        createdAt: timestamp()
    },
    ui: {
      listView: {
        initialColumns: ['operation', 'schemaKey', 'user', 'createdAt'],
        initialSort: {
          field: 'createdAt',
          direction: 'DESC'
        }
      },
    }
  });