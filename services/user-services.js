/////////////////////////////////

// creating a user:

// const User = require('../models/index')['User']
// class UserService {
//   async createUser(user) {
//     return await User.create(user)
//   }
// }
// let user = {
//   firstName: 'Alicia',
//   lastName: 'Hetrick',
//   age: 29,
// }
// let userService = new UserService()
// const result = async () => {
//   const data = await userService.createUser(user)
//   console.log(data)
// }
// result()

/////////////////////////////////

// finding all users:

// const User = require('../models/index')['User']

// class UserService {
//   async findAllUser() {
//     return await User.findAll()
//   }
// }
// let userService = new UserService()
// const result = async () => {
//   const data = await userService.findAllUser()
//   console.log(data)
// }

// result()

/////////////////////////////////

// find by primary key:

const User = require('../models/index')['User']
class UserService {
  async findWithPk(userId) {
    return await User.findByPk(userId)
  }
}
let userId = 1
let userService = new UserService()

const result = async () => {
  const data = await userService.findWithPk(userId)
  console.log(data)
}

result()
