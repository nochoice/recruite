-- CreateTable
CREATE TABLE "_Post_addresses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Post_addresses_A_fkey" FOREIGN KEY ("A") REFERENCES "Address" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Post_addresses_B_fkey" FOREIGN KEY ("B") REFERENCES "Post" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_Post_addresses_AB_unique" ON "_Post_addresses"("A", "B");

-- CreateIndex
CREATE INDEX "_Post_addresses_B_index" ON "_Post_addresses"("B");
