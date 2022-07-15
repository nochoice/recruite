import { list } from '@keystone-6/core';
import { checkbox, relationship, text } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { PluginActivityTracking } from '../plugins/activityTracking';

export default list({
    hooks: {
      afterOperation: async (data: any) => {
        PluginActivityTracking(data);
      }
    },
    fields: {
      title: text({
        validation: { isRequired: true },
      }),
      company: relationship({ ref: 'Company.positions', many: false }),
      contacts: relationship({ ref: 'Contact', many: true }),
      
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