const Profile = require('../models/index')['Profile']
const User = require('../models/index')['User']

class ProfileService {
  async createProfile(profile) {
    return await Profile.create(profile)
  }
  async getAll() {
    return await Profile.findAll({
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
    })
  }
}

let profileService = new ProfileService()
let profile = {
  userId: 1,
  height: '30',
  country: 'USA',
  email: 'email@example.com',
}

const result = async () => {
  let dataCreated = await profileService.createProfile(profile)
  let data = await profileService.getAll()
}

result()
