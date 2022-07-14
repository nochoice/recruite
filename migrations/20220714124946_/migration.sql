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
    "updatedAt" DATETIME,
    "createdAt" DATETIME,
    "updatedBy" TEXT,
    CONSTRAINT "Interview_updatedBy_fkey" FOREIGN KEY ("updatedBy") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interview_company_fkey" FOREIGN KEY ("company") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interview_canditate_fkey" FOREIGN KEY ("canditate") REFERENCES "Candidate" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Interview_position_fkey" FOREIGN KEY ("position") REFERENCES "Position" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Interview" ("canditate", "company", "createdAt", "date", "description", "id", "position", "title", "updatedAt") SELECT "canditate", "company", "createdAt", "date", "description", "id", "position", "title", "updatedAt" FROM "Interview";
DROP TABLE "Interview";
ALTER TABLE "new_Interview" RENAME TO "Interview";
CREATE INDEX "Interview_canditate_idx" ON "Interview"("canditate");
CREATE INDEX "Interview_company_idx" ON "Interview"("company");
CREATE INDEX "Interview_position_idx" ON "Interview"("position");
CREATE INDEX "Interview_updatedBy_idx" ON "Interview"("updatedBy");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
