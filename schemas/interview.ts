import { list } from '@keystone-6/core';
import { relationship, text, timestamp } from '@keystone-6/core/fields';
import { document } from '@keystone-6/fields-document';
import { PluginActivityTracking } from '../plugins/activityTracking';
import { PluginAtTracking } from '../plugins/atTracking';
import { PluginByTracking } from '../plugins/byTracking';

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
      date: timestamp({
        validation: {isRequired: true}
      }),
      canditate: relationship({ ref: 'Candidate' }),
      company: relationship({ ref: 'Company' }),
      contact: relationship({ ref: 'Contact', many: true }),
      position: relationship({ ref: 'Position' }),
      description: document({
        formatting: true,
        dividers: true,
        links: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
        ],
      }),
      ...PluginAtTracking,
      ...PluginByTracking
    },
    ui: {
      itemView: {
        // defaultFieldMode: 'hidden'
      },
      listView: {
        initialColumns: ['title'],

      },
    },
  });