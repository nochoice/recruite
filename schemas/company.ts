import { list } from '@keystone-6/core';
import { image, relationship, text, file} from '@keystone-6/core/fields';
import { PluginActivityTracking } from '../plugins/activityTracking';
import address_fields from './address_fields';

export default list({
    hooks: {
      afterOperation: async (data: any) => {
        PluginActivityTracking(data);
      }
    },
    fields: {
      name: text({
        validation: { isRequired: true },
      }),

      positions: relationship({ ref: 'Position.company', many: true }),
      addresses: relationship({ 
          ref: 'Address', 
          ui: {
            displayMode: 'cards',
            cardFields: ['addressCountry', 'addressLocality'],
            inlineEdit: { fields: ['addressCountry', 'addressLocality'] },
            linkToItem: false,
            inlineConnect: false,
            inlineCreate: { fields: ['addressCountry', 'addressLocality', 'postOfficeBoxNumber', 'streetAddress'] },
          },
          many: true 
      }),
      contacts: relationship({ 
        ref: 'Contact', 
        // ui: {
        //   displayMode: 'cards',
        //   cardFields: ['name', 'surname'],
        //   inlineEdit: { fields: ['name', 'surname'] },
        //   linkToItem: false,
        //   inlineConnect: true,
        //   inlineCreate: { fields: ['name', 'surname'] },
        // },
        many: true 
      }),
      contracts: file({ storage: 'company_contract',  }),
      logo: image({ storage: 'my_local_images' }),
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      labelField: 'name',
      listView: {
        initialColumns: ['name', 'contacts'],
        defaultFieldMode: 'read'
      },
      itemView: { 
        defaultFieldMode: 'edit'
      },
      hideDelete: ({ session, context }) => {
        // console.log(session)
        return false
      },
    },
    description: '',
  });