const { NotFound } = require("http-errors");
const { UserModel } = require("./user.model");

class UsersService {
  createUser(createParams) {
    return UserModel.insertUsers(createParams);
  }
  getUsers() {
    return UserModel.findUsers();
  }
  getUserById(id) {
    const user = UserModel.findUserById(id);
    if (!user) {
      throw new NotFound("User not found");
    }
    return user;
  }

  getUpdateUser(id, userParams) {
    // 1. Validate req body
    // 2. find user with such id
    // 3. if not find - throw Error 404
    // 4. return user
    const user = UserModel.updateUserById(id, userParams);
    if (!user) {
      throw new NotFound("User not found");
    }
    return user;
  }

  deleteById(id) {
    const isDelete = UserModel.deleteUserById(id);
    if (!isDelete) {
      throw new NotFound("User with this id not found");
    }
  }
}
exports.usersService = new UsersService();
