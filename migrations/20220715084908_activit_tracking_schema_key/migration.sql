-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ActivityTracking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "operation" TEXT NOT NULL DEFAULT '',
    "schemaKey" TEXT NOT NULL DEFAULT '',
    "user" TEXT,
    "data" TEXT,
    "createdAt" DATETIME,
    CONSTRAINT "ActivityTracking_user_fkey" FOREIGN KEY ("user") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_ActivityTracking" ("createdAt", "data", "id", "operation", "user") SELECT "createdAt", "data", "id", "operation", "user" FROM "ActivityTracking";
DROP TABLE "ActivityTracking";
ALTER TABLE "new_ActivityTracking" RENAME TO "ActivityTracking";
CREATE INDEX "ActivityTracking_user_idx" ON "ActivityTracking"("user");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
