import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";
import { document } from "@keystone-6/fields-document";
import { PluginActivityTracking } from "../plugins/activityTracking";

export default list({
  hooks: {
    afterOperation: async (data: any) => {
      PluginActivityTracking(data);
    }
  },
    fields: {
      title: text({
        isIndexed: 'unique',
      }),
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
    },
    // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
    ui: {
      listView: {
        initialColumns: ['title'],
      },
    },
  });