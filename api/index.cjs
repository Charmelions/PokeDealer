const express = require("express");
const jwt = require("jsonwebtoken");
const apiRouter = express.Router();

apiRouter.use("/cart", require("./cart.cjs"));

apiRouter.use("/orders", require("./order.cjs"));

apiRouter.use("/pokemon", require("./pokemon.cjs"));

apiRouter.use("/users", require("./users.cjs"));

const { getUserById } = require("../db/users.cjs");

// middleware to establish and check for Authorization from Bearer
apiRouter.use(async (req, res, next) => {
  const prefix = "Bearer";
  const auth = req.header("Authorization");

  //if no authorization provided, do next
  if (!auth) {
    next();
  }
  // else if auth header contains Bearer
  // create a token for the user
  else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    //if token provided, verify the token with jwt
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    // if the user id is verified by jwt
    if (id) {
      // on validation from a login request, getUserById with the verified jwt id
      // set the logged-in user to be the user
      // then do next
      const user = await getUserById(id);
      req.user = { id: user.id, username: user.username };
      next();
    }
    // else do next
    else {
      next();
    }
  } // else do next
  else {
    next();
  }
});

module.exports = { apiRouter };
