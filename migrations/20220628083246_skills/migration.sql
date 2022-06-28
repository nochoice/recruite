-- CreateTable
CREATE TABLE "CandidateSkill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "skill" TEXT,
    "fromDate" DATETIME,
    "description" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "CandidateSkill_skill_fkey" FOREIGN KEY ("skill") REFERENCES "Skill" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]'
);

-- CreateIndex
CREATE INDEX "CandidateSkill_skill_idx" ON "CandidateSkill"("skill");
