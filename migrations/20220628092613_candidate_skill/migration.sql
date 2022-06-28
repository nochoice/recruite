-- CreateTable
CREATE TABLE "_Candidate_skills" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Candidate_skills_A_fkey" FOREIGN KEY ("A") REFERENCES "Candidate" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Candidate_skills_B_fkey" FOREIGN KEY ("B") REFERENCES "CandidateSkill" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_Candidate_skills_AB_unique" ON "_Candidate_skills"("A", "B");

-- CreateIndex
CREATE INDEX "_Candidate_skills_B_index" ON "_Candidate_skills"("B");
