/*
  Warnings:

  - You are about to drop the column `skill` on the `CandidateSkill` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CandidateSkill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "fromDate" DATETIME,
    "description" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "CandidateSkill_title_fkey" FOREIGN KEY ("title") REFERENCES "Skill" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CandidateSkill" ("description", "fromDate", "id") SELECT "description", "fromDate", "id" FROM "CandidateSkill";
DROP TABLE "CandidateSkill";
ALTER TABLE "new_CandidateSkill" RENAME TO "CandidateSkill";
CREATE INDEX "CandidateSkill_title_idx" ON "CandidateSkill"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
