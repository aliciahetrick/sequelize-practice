const Movie = require('../models/index')['Movie']
const Actor = require('../models/index')['Actor']
const User = require('../models/index')['User']

class MovieService {
  async createMovie(movie) {
    return await Movie.create(movie)
  }
  async findOneMovie(id) {
    return await Movie.findOne({
      where: {
        id,
      },
      include: [
        {
          model: Actor,
          as: 'actors',
        },
      ],
    })
  }
}

let movieService = new MovieService()
let newMovie = {
  name: 'Twilight',
}

const result = async () => {
  let movie = await movieService.createMovie(newMovie)
  let actor = await Actor.findOne({ where: { id: 1 } })
  let data = await movie.addActor(actor)
  let oneMovie = await movieService.findOneMovie(1)
  console.log(oneMovie)
}

result()
