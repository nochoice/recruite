/*
  Warnings:

  - Added the required column `date` to the `Interview` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Interview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "date" DATETIME NOT NULL,
    "canditate" TEXT,
    "company" TEXT,
    "contact" TEXT,
    "description" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    CONSTRAINT "Interview_company_fkey" FOREIGN KEY ("company") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interview_canditate_fkey" FOREIGN KEY ("canditate") REFERENCES "Candidate" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interview_contact_fkey" FOREIGN KEY ("contact") REFERENCES "Contact" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Interview" ("id", "title") SELECT "id", "title" FROM "Interview";
DROP TABLE "Interview";
ALTER TABLE "new_Interview" RENAME TO "Interview";
CREATE INDEX "Interview_canditate_idx" ON "Interview"("canditate");
CREATE INDEX "Interview_company_idx" ON "Interview"("company");
CREATE INDEX "Interview_contact_idx" ON "Interview"("contact");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
