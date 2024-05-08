/*
  Warnings:

  - You are about to drop the column `descriptions` on the `descriptions` table. All the data in the column will be lost.
  - You are about to drop the column `typeName` on the `types` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_pokemonId_fkey";

-- AlterTable
ALTER TABLE "descriptions" DROP COLUMN "descriptions",
ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "types" DROP COLUMN "typeName",
ADD COLUMN     "typeOne" TEXT,
ADD COLUMN     "typeTwo" TEXT;

-- DropTable
DROP TABLE "categories";
