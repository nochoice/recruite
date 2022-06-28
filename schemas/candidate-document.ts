import { list } from "@keystone-6/core";
import { file, select} from "@keystone-6/core/fields";

export default list({
    fields: {
      type: select({
        type: 'enum',
        options: [
          { label: 'CV', value: 'cv' },
          { label: 'Other', value: 'other' }
        ]
      }),

      document: file({ storage: 'candidate_documents',  }),
    },
    ui: {
      isHidden: true
    }
  });