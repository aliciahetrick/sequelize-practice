const User = require('../models/index')['User']

class UserService {
  async findAllUser() {
    return await User.findAll()
  }
}
let userService = new UserService()
const result = async () => {
  const data = await userService.findAllUser()
  console.log(data)
}

result()
