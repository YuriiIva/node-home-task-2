function serializeUserResponse(user) {
  return { user: serializerUser(user) };
}

function serializeGetUsersResponse(users) {
  return { users: users.map(serializerUser) };
}

function serializerUser(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}
exports.serializeUserResponse = serializeUserResponse;
exports.serializeGetUsersResponse = serializeGetUsersResponse;
exports.serializerUser = serializerUser;
