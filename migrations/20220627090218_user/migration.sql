/*
  Warnings:

  - You are about to drop the `CandidateWatch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CandidateWatch_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CandidateWatch";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CandidateWatch_users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_Candidate_watching" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Candidate_watching_A_fkey" FOREIGN KEY ("A") REFERENCES "Candidate" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Candidate_watching_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_Candidate_watching_AB_unique" ON "_Candidate_watching"("A", "B");

-- CreateIndex
CREATE INDEX "_Candidate_watching_B_index" ON "_Candidate_watching"("B");
