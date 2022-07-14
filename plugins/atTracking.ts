import { timestamp } from "@keystone-6/core/fields";

export const PluginAtTracking = {
    updatedAt: timestamp({
        label: 'Updated at',
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
              }) =>new Date(),
        }
    }),
    createdAt: timestamp({
        label: 'Created at',
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
              }) => operation === 'create' ? new Date() : resolvedData[fieldKey],
        }
    }),
}