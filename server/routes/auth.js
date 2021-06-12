const router = require("express").Router();
const User = require("../models/User");

//Register

router.get("/register", async (req, res) => {
  const user = await new User({
    username: "john",
    email: "john@test.com",
    password: "123456"
  });
  await user.save();
  res.send("ok");
});

module.exports = router;
