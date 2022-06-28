-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Position" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "company" TEXT,
    "description" TEXT NOT NULL DEFAULT '[{"type":"paragraph","children":[{"text":""}]}]',
    "active" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Position_company_fkey" FOREIGN KEY ("company") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Position" ("company", "id", "title") SELECT "company", "id", "title" FROM "Position";
DROP TABLE "Position";
ALTER TABLE "new_Position" RENAME TO "Position";
CREATE INDEX "Position_company_idx" ON "Position"("company");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
