/*
  Warnings:

  - You are about to drop the column `contact` on the `Interview` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_Interview_contact" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Interview_contact_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Interview_contact_B_fkey" FOREIGN KEY ("B") REFERENCES "Interview" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Interview" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "date" DATETIME NOT NULL,
    "canditate" TEXT,
    "company" TEXT,
    "position" TEXT,
    "description" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    CONSTRAINT "Interview_company_fkey" FOREIGN KEY ("company") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interview_canditate_fkey" FOREIGN KEY ("canditate") REFERENCES "Candidate" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interview_position_fkey" FOREIGN KEY ("position") REFERENCES "Position" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Interview" ("canditate", "company", "date", "description", "id", "position", "title") SELECT "canditate", "company", "date", "description", "id", "position", "title" FROM "Interview";
DROP TABLE "Interview";
ALTER TABLE "new_Interview" RENAME TO "Interview";
CREATE INDEX "Interview_canditate_idx" ON "Interview"("canditate");
CREATE INDEX "Interview_company_idx" ON "Interview"("company");
CREATE INDEX "Interview_position_idx" ON "Interview"("position");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_Interview_contact_AB_unique" ON "_Interview_contact"("A", "B");

-- CreateIndex
CREATE INDEX "_Interview_contact_B_index" ON "_Interview_contact"("B");
