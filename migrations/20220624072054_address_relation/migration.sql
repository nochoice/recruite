-- CreateTable
CREATE TABLE "_Company_addresses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Company_addresses_A_fkey" FOREIGN KEY ("A") REFERENCES "Address" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Company_addresses_B_fkey" FOREIGN KEY ("B") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_Company_addresses_AB_unique" ON "_Company_addresses"("A", "B");

-- CreateIndex
CREATE INDEX "_Company_addresses_B_index" ON "_Company_addresses"("B");
