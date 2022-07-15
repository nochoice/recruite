interface ActivityTracking {
    listKey: string;
    operation: string;
    item: any;
    context: any
}

export const PluginActivityTracking = async ({
    listKey,
    operation,
    item,
    context
}: ActivityTracking) => {
    const data = {
        operation,
        schemaKey: listKey,
        user: {
            connect: {
                id: context.session.itemId
            }
        },
        data: item,
        createdAt: new Date()
    };

    await context.db.ActivityTracking.createOne({data : data});
}
