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

// const User = require('../models/index')['User']
// class UserService {
//   async findWithPk(userId) {
//     return await User.findByPk(userId)
//   }
// }
// let userId = 1
// let userService = new UserService()

// const result = async () => {
//   const data = await userService.findWithPk(userId)
//   console.log(data)
// }

// result()

/////////////////////////////////

// fetches the first entry based on optional arguments passed:

// const User = require('../models/index')['User']

// class UserService {
//   async findOne(firstname) {
//     return await User.findOne({ where: { firstName: firstname } })
//   }
// }

// let userService = new UserService()
// let firstname = 'Alicia'
// const result = async () => {
//   const data = await userService.findOne(firstname)
//   console.log(data)
// }

// result()

/////////////////////////////////

// fetches or create if does not exist:

// const User = require('../models/index')['User']

// class UserService {
//   async findOrCreate(firstname) {
//     return await User.findOrCreate({
//       where: { firstName: firstname },
//       defaults: {
//         lastName: 'Unknown',
//       },
//     })
//   }
// }

// let userService = new UserService()
// let firstname = 'Josh'
// const result = async () => {
//   const data = await userService.findOrCreate(firstname)
//   console.log(data)
// }

// result()

/////////////////////////////////

// update existing data:

// const User = require('../models/index')['User']
// class UserService {
//   async updateUser(id, payload) {
//     return await User.update(payload, {
//       where: {
//         id,
//       },
//     })
//   }
// }

// let userService = new UserService()
// let payload = {
//   firstName: 'joshua',
// }
// let id = 2
// const result = async () => {
//   const data = await userService.updateUser(id, payload)
//   console.log(data)
// }

// result()

/////////////////////////////////

// deleting existing data:

const User = require('../models/index')['User']
class UserService {
  async deleteUser(id) {
    return await User.destroy({
      where: {
        id,
      },
    })
  }
}

let userService = new UserService()
let id = 2
const result = async () => {
  const data = await userService.deleteUser(id)
  console.log(data)
}

result()
