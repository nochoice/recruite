-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "addressCountry" TEXT NOT NULL DEFAULT '',
    "addressLocality" TEXT NOT NULL DEFAULT '',
    "postalCode" TEXT NOT NULL DEFAULT '',
    "postOfficeBoxNumber" TEXT NOT NULL DEFAULT '',
    "streetAddress" TEXT NOT NULL DEFAULT ''
);
