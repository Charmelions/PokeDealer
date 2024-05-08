/*
  Warnings:

  - You are about to drop the column `baseStat` on the `stats` table. All the data in the column will be lost.
  - Added the required column `attack` to the `stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defense` to the `stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `stats` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `stats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "stats" DROP COLUMN "baseStat",
ADD COLUMN     "attack" TEXT NOT NULL,
ADD COLUMN     "defense" TEXT NOT NULL,
ADD COLUMN     "hp" TEXT NOT NULL,
ADD COLUMN     "speed" TEXT NOT NULL;
