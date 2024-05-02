import { describe, expect, test } from "@jest/globals";
import {
  createUser,
  getUserByUsername,
  getUserById,
  adminUpdateUser,
  updateUser,
  deleteUser,
} from "../db/users";

describe("create a new user", () => {
  test("given a firstAndLastName, email, username, password, and cartId via the Order table", () => {
    expect(createUser(1, 2)).toBe(3);
  });
});
