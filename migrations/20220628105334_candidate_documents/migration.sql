-- CreateTable
CREATE TABLE "CandidateDocument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT,
    "document_filesize" INTEGER,
    "document_filename" TEXT
);

-- CreateTable
CREATE TABLE "_Candidate_documents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Candidate_documents_A_fkey" FOREIGN KEY ("A") REFERENCES "Candidate" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Candidate_documents_B_fkey" FOREIGN KEY ("B") REFERENCES "CandidateDocument" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Candidate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "surname" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "linkedIn" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]'
);
INSERT INTO "new_Candidate" ("description", "email", "id", "name", "phone", "surname") SELECT "description", "email", "id", "name", "phone", "surname" FROM "Candidate";
DROP TABLE "Candidate";
ALTER TABLE "new_Candidate" RENAME TO "Candidate";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_Candidate_documents_AB_unique" ON "_Candidate_documents"("A", "B");

-- CreateIndex
CREATE INDEX "_Candidate_documents_B_index" ON "_Candidate_documents"("B");
