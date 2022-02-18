const { Router } = require("express");
const { validate } = require("../../middlewares/validate");
const {
  serializeUserResponse,
  serializeGetUsersResponse,
} = require("./user.serializer");
const { createUserSchema, updateUser } = require("./users.schemas");
const { usersService } = require("./users.service");

const router = Router();
// 1. C - Create
router.post("/", validate(createUserSchema), (req, res, next) => {
  const user = usersService.createUser(req.body);

  res.status(201).send(serializeUserResponse(user));
});

/// 2. R - Read

router.get("/", (req, res, next) => {
  const users = usersService.getUsers();
  res.status(200).send(serializeGetUsersResponse(users));
});

router.get("/:id", (req, res, next) => {
  const userById = usersService.getUserById(req.params.id);
  res.status(200).send(serializeUserResponse(userById));
});

// 3. U -Update

router.patch("/:id", validate(updateUser), (req, res, next) => {
  const user = usersService.getUpdateUser(req.params.id, req.body);
  res.status(200).send(serializeUserResponse(user));
});

// 4. Delete
router.delete("/:id", (req, res, next) => {
  usersService.deleteById(req.params.id);
  res.status(204).send("Done delete");
});

exports.usersRouter = router;
