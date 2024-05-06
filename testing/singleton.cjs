/* global jest, beforeEach */
const { mockDeep, mockClear } = require("jest-mock-extended");
const prisma = require("./client.cjs");

const prismaMock = prisma;

jest.mock("./client.cjs", () => mockDeep());

beforeEach(() => {
  mockClear(prismaMock);
});

module.exports = { prismaMock };
