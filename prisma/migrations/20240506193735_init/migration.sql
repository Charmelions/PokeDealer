/*
  Warnings:

  - You are about to drop the column `pokemonId` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `frontDefault` on the `sprites` table. All the data in the column will be lost.
  - You are about to drop the column `baseState` on the `stats` table. All the data in the column will be lost.
  - Added the required column `baseStat` to the `stats` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart_pokemon" DROP CONSTRAINT "cart_pokemon_cartId_fkey";

-- DropForeignKey
ALTER TABLE "cart_pokemon" DROP CONSTRAINT "cart_pokemon_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "categories" DROP CONSTRAINT "categories_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "descriptions" DROP CONSTRAINT "descriptions_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_cartId_fkey";

-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_userId_fkey";

-- DropForeignKey
ALTER TABLE "sprites" DROP CONSTRAINT "sprites_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "stats" DROP CONSTRAINT "stats_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "types" DROP CONSTRAINT "types_pokemonId_fkey";

-- AlterTable
CREATE SEQUENCE cart_cartid_seq;
ALTER TABLE "cart" DROP COLUMN "pokemonId",
DROP COLUMN "userId",
ALTER COLUMN "cartId" SET DEFAULT nextval('cart_cartid_seq');
ALTER SEQUENCE cart_cartid_seq OWNED BY "cart"."cartId";

-- AlterTable
ALTER TABLE "cart_pokemon" ALTER COLUMN "cartId" DROP NOT NULL,
ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "categories" ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "descriptions" ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "order" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "cartId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "categoryId";

-- AlterTable
ALTER TABLE "sprites" DROP COLUMN "frontDefault",
ADD COLUMN     "dreamDefault" TEXT,
ADD COLUMN     "homeDefault" TEXT,
ADD COLUMN     "homeShiny" TEXT,
ADD COLUMN     "officialDefault" TEXT,
ADD COLUMN     "officialShiny" TEXT,
ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "stats" DROP COLUMN "baseState",
ADD COLUMN     "baseStat" BIGINT NOT NULL,
ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "types" ALTER COLUMN "pokemonId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "types" ADD CONSTRAINT "types_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sprites" ADD CONSTRAINT "sprites_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "descriptions" ADD CONSTRAINT "descriptions_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_pokemon" ADD CONSTRAINT "cart_pokemon_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_pokemon" ADD CONSTRAINT "cart_pokemon_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("cartId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("cartId") ON DELETE SET NULL ON UPDATE CASCADE;
