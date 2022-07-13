-- CreateTable
CREATE TABLE "_Position_contacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Position_contacts_A_fkey" FOREIGN KEY ("A") REFERENCES "Contact" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Position_contacts_B_fkey" FOREIGN KEY ("B") REFERENCES "Position" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_Position_contacts_AB_unique" ON "_Position_contacts"("A", "B");

-- CreateIndex
CREATE INDEX "_Position_contacts_B_index" ON "_Position_contacts"("B");
