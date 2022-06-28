/*
  Warnings:

  - You are about to drop the column `contracts_extension` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `contracts_height` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `contracts_id` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `contracts_width` on the `Company` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idField" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "isComplete" BOOLEAN NOT NULL DEFAULT false,
    "isObsolet" BOOLEAN NOT NULL DEFAULT false,
    "contracts_filesize" INTEGER,
    "contracts_filename" TEXT
);
INSERT INTO "new_Company" ("contracts_filesize", "id", "idField", "isComplete", "isObsolet", "name") SELECT "contracts_filesize", "id", "idField", "isComplete", "isObsolet", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
