/*
  Warnings:

  - Changed the type of `attack` on the `stats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `defense` on the `stats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `hp` on the `stats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `speed` on the `stats` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "stats" DROP COLUMN "attack",
ADD COLUMN     "attack" BIGINT NOT NULL,
DROP COLUMN "defense",
ADD COLUMN     "defense" BIGINT NOT NULL,
DROP COLUMN "hp",
ADD COLUMN     "hp" BIGINT NOT NULL,
DROP COLUMN "speed",
ADD COLUMN     "speed" BIGINT NOT NULL;
