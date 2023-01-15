const User = require('../models/index')['User']
const Cars = require('../models/index')['Cars']
const { profileService, profile } = require('./profile-service.js')

class CarService {
  async createCar(car) {
    return await Cars.create(car)
  }
}

let carService = new CarService()
let car = {
  userId: 1,
  color: 'green',
  name: 'Toyota Camry',
}
const result = async () => {
  let data = await carService.createCar(car)
  console.log(data)
}

result()
