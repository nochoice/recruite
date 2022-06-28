import { text } from "@keystone-6/core/fields";

export default {
    addressCountry: text({
        validation: { isRequired: true },
    }),
    addressLocality: text({
        validation: { isRequired: true },
    }),
    postOfficeBoxNumber: text({
        validation: { isRequired: true },
    }),
    streetAddress: text({
        validation: { isRequired: true },
    }),
    postalCode: text(),
}