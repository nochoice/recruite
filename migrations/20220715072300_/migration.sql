-- CreateTable
CREATE TABLE "ActivityTracking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "operation" TEXT NOT NULL DEFAULT '',
    "user" TEXT,
    "data" TEXT,
    "createdAt" DATETIME,
    CONSTRAINT "ActivityTracking_user_fkey" FOREIGN KEY ("user") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "ActivityTracking_user_idx" ON "ActivityTracking"("user");
