import { relationship, timestamp } from "@keystone-6/core/fields";

export const PluginByTracking = {
    updatedBy: relationship({ 
        ref: 'User',
        access: {
            read: () => true,
            create: () => false,
            update: () => false
        },
        hooks: {
            resolveInput: async ({
                listKey,
                fieldKey,
                operation,
                inputData,
                item,
                resolvedData,
                context,
              }) => {
                return { connect: { id: context.session.itemId } } 
              },
        }
    }),
    createdBy: relationship(
        { 
            ref: 'User',
            access: {
                read: () => true,
                create: () => false,
                update: () => false
            },
            hooks: {
                resolveInput: async ({
                    listKey,
                    fieldKey,
                    operation,
                    inputData,
                    item,
                    resolvedData,
                    context,
                  }) => {
                    return operation === 'create' ? ({ connect: { id: context.session.itemId } }) : resolvedData[fieldKey];
                  },
            }
        }
    )
}