const { createUser } = require("../db/users");
const { prismaMock } = require("../testing/singleton");

test("should create new user with no cart", async () => {
  const user = {
    userId: 1,
    firstAndLastName: "Anusha Delightful",
    email: "nooshydelight@charmelions.com",
    username: "nooshydelightful",
    password: "charming",
  };

  prismaMock.user.create.mockReturnValue(user);

  await expect(createUser(user)).toBe({
    userId: 1,
    firstAndLastName: "Anusha Delightful",
    email: "nooshydelightful@charmelions.com",
    username: "nooshydelightful",
    password: "charming",
  });
});
