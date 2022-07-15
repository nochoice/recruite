import { PluginActivityTracking } from './../plugins/activityTracking';
import { list } from '@keystone-6/core';
import { image, password, relationship, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';

export default list({
    hooks: {
      afterOperation: async (data: any) => {
        PluginActivityTracking(data);
      }
    },
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