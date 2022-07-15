import { list } from "@keystone-6/core";
import { image, relationship, text } from "@keystone-6/core/fields";
import { PluginActivityTracking } from "../plugins/activityTracking";

export default list({
    hooks: {
      afterOperation: async (data: any) => {
        PluginActivityTracking(data);
      }
    },
    fields: {
        image: image({ storage: 'my_local_images' }),
        name: text({
            validation: { isRequired: true },
        }),
        surname: text({
            validation: { isRequired: true },
        }),
        description: text(),
        phone: text(),
        email: text(
            {isIndexed: 'unique'}
        ),
        // contacts: relationship({ 
        //     ref: 'ContactType', 
        //     ui: {
        //       displayMode: 'cards',
        //       cardFields: ['type', 'content'],
        //     //   inlineEdit: { fields: ['addressCountry', 'addressLocality'] },
        //       linkToItem: false,
        //       inlineConnect: true,
        //     //   inlineCreate: { fields: ['addressCountry', 'addressLocality', 'postOfficeBoxNumber', 'streetAddress'] },
        //     },
        //     many: true 
        //   }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'surname'],
      },
    },
  });