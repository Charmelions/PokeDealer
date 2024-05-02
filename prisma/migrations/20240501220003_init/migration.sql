-- CreateTable
CREATE TABLE "stats" (
    "statsId" BIGSERIAL NOT NULL,
    "baseState" BIGINT NOT NULL,
    "pokemonId" BIGINT NOT NULL,

    CONSTRAINT "stats_pkey" PRIMARY KEY ("statsId")
);

-- CreateTable
CREATE TABLE "types" (
    "typesId" BIGSERIAL NOT NULL,
    "typeName" TEXT NOT NULL,
    "pokemonId" BIGINT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("typesId")
);

-- CreateTable
CREATE TABLE "sprites" (
    "spritesId" BIGSERIAL NOT NULL,
    "frontDefault" TEXT NOT NULL,
    "pokemonId" BIGINT NOT NULL,

    CONSTRAINT "sprites_pkey" PRIMARY KEY ("spritesId")
);

-- CreateTable
CREATE TABLE "descriptions" (
    "descriptionsId" BIGSERIAL NOT NULL,
    "descriptions" TEXT NOT NULL,
    "pokemonId" BIGINT NOT NULL,

    CONSTRAINT "descriptions_pkey" PRIMARY KEY ("descriptionsId")
);

-- CreateTable
CREATE TABLE "categories" (
    "categoriesId" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pokemonId" BIGINT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("categoriesId")
);

-- CreateTable
CREATE TABLE "pokemon" (
    "pokemonId" BIGINT NOT NULL,
    "categoryId" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "price" BIGINT NOT NULL,
    "rarity" BIGINT NOT NULL,
    "count" BIGINT NOT NULL,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("pokemonId")
);

-- CreateTable
CREATE TABLE "cart_pokemon" (
    "id" BIGSERIAL NOT NULL,
    "cartId" BIGINT NOT NULL,
    "pokemonId" BIGINT NOT NULL,

    CONSTRAINT "cart_pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart" (
    "cartId" BIGINT NOT NULL,
    "pokemonId" BIGINT NOT NULL,
    "userId" BIGINT NOT NULL,
    "count" BIGINT NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cartId")
);

-- CreateTable
CREATE TABLE "order" (
    "orderId" BIGSERIAL NOT NULL,
    "userId" BIGINT NOT NULL,
    "cartId" BIGINT NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "user" (
    "userId" BIGINT NOT NULL,
    "firstAndLastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN,

    CONSTRAINT "user_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "stats" ADD CONSTRAINT "stats_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "types" ADD CONSTRAINT "types_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sprites" ADD CONSTRAINT "sprites_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "descriptions" ADD CONSTRAINT "descriptions_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_pokemon" ADD CONSTRAINT "cart_pokemon_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemon"("pokemonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_pokemon" ADD CONSTRAINT "cart_pokemon_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "cart"("cartId") ON DELETE RESTRICT ON UPDATE CASCADE;
