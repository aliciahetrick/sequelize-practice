const User = require('../models/index')['User']
class UserService {
  async createUser(user) {
    return await User.create(user)
  }
}
let user = {
  firstName: 'Alicia',
  lastName: 'Hetrick',
  age: 29,
}
let userService = new UserService()
const result = async () => {
  const data = await userService.createUser(user)
  console.log(data)
}
result()
