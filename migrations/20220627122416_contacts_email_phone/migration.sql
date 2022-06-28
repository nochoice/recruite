/*
  Warnings:

  - You are about to drop the `_Contact_contacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_Contact_contacts_B_index";

-- DropIndex
DROP INDEX "_Contact_contacts_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_Contact_contacts";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "surname" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "image_filesize" INTEGER,
    "image_extension" TEXT,
    "image_width" INTEGER,
    "image_height" INTEGER,
    "image_id" TEXT,
    "phone" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Contact" ("description", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "name", "surname") SELECT "description", "id", "image_extension", "image_filesize", "image_height", "image_id", "image_width", "name", "surname" FROM "Contact";
DROP TABLE "Contact";
ALTER TABLE "new_Contact" RENAME TO "Contact";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
