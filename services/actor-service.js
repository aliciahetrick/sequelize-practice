const Actor = require('../models/index')['Actor']
const User = require('../models/index')['User']

class ActorService {
  async createActor(actor) {
    return await Actor.create(actor)
  }
}

let actorService = new ActorService()
let actor = {
  name: 'Kristen Stewart',
}
const result = async () => {
  let data = await actorService.createActor(actor)
  console.log(data)
}

result()
