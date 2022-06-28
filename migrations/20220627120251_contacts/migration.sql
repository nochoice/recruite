/*
  Warnings:

  - You are about to drop the column `addressCountry` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `addressLocality` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `postOfficeBoxNumber` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `streetAddress` on the `Company` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "surname" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT
);

-- CreateTable
CREATE TABLE "ContactType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT,
    "isPrimary" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "_Company_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Company_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Company_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_Contact_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Contact_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Contact_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "ContactType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

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
INSERT INTO "new_Company" ("contracts_filename", "contracts_filesize", "id", "idField", "isComplete", "isObsolet", "name") SELECT "contracts_filename", "contracts_filesize", "id", "idField", "isComplete", "isObsolet", "name" FROM "Company";
DROP TABLE "Company";
ALTER TABLE "new_Company" RENAME TO "Company";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_Company_contacts_AB_unique" ON "_Company_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Company_contacts_B_index" ON "_Company_contacts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Contact_contacts_AB_unique" ON "_Contact_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Contact_contacts_B_index" ON "_Contact_contacts"("B");
