-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idField" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "isObsolet" BOOLEAN NOT NULL DEFAULT false,
    "addressCountry" TEXT NOT NULL DEFAULT '',
    "addressLocality" TEXT NOT NULL DEFAULT '',
    "postOfficeBoxNumber" TEXT NOT NULL DEFAULT '',
    "streetAddress" TEXT NOT NULL DEFAULT '',
    "postalCode" TEXT NOT NULL DEFAULT '',
    "contracts_filesize" INTEGER,
    "contracts_filename" TEXT
);
INSERT INTO "new_Company" ("contracts_filename", "contracts_filesize", "id", "idField", "isComplete", "isObsolet", "name") SELECT "contracts_filename", "contracts_filesize", "id", "idField", "isComplete", "isObsolet", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
