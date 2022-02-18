const uuid = require("uuid");

const users = [];

class UserModel {
  insertUsers(createParams) {
    const id = uuid.v4();
    const user = { id, ...createParams };

    users.push(user);
    return user;
  }
  findUsers() {
    return users;
  }
  findUserById(id) {
    return users.find((u) => u.id === id);
  }

  updateUserById(id, userParams) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return null;
    }
    users[index] = {
      ...users[index],
      ...userParams,
    };
    return users[index];
  }
  deleteUserById(id) {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return false;
    }
    users.splice(index, 1);
    return true;
  }
}
exports.UserModel = new UserModel();
