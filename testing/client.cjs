// this client is for mocking Prisma with Jest

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
module.exports = prisma;
