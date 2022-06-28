-- CreateTable
CREATE TABLE "CandidateWatch" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "_CandidateWatch_users" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CandidateWatch_users_A_fkey" FOREIGN KEY ("A") REFERENCES "CandidateWatch" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CandidateWatch_users_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CandidateWatch_users_AB_unique" ON "_CandidateWatch_users"("A", "B");

-- CreateIndex
CREATE INDEX "_CandidateWatch_users_B_index" ON "_CandidateWatch_users"("B");
