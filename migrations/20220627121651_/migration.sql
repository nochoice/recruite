/*
  Warnings:

  - You are about to drop the column `idField` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `isComplete` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `isObsolet` on the `Company` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Company" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "contracts_filesize" INTEGER,
    "contracts_filename" TEXT
);
INSERT INTO "new_Company" ("contracts_filename", "contracts_filesize", "id", "name") SELECT "contracts_filename", "contracts_filesize", "id", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
