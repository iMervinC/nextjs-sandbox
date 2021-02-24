import Pet from '../models/Pet'


const getPets = async(req, res) => {
  try {
    console.log('get pets', res)
    const pets = await Pet.find({}) /* find all the data in our database */
    res.status(200).json({ success: true, data: pets })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

const postPet = async(req, res) => {
  try {
    const pet = await Pet.create(
      req.body
    ) /* create a new model in the database */
    res.status(201).json({ success: true, data: pet })
  } catch (error) {
    res.status(400).json({ success: false })
  }
}

const get_pet_id = async(req, res) => {
    try {
      const pet = await Pet.findById(id)
      if (!pet) {
        return res.status(400).json({ success: false })
      }
      res.status(200).json({ success: true, data: pet })
    } catch (error) {
      res.status(400).json({ success: false })
    }
}


export {getPets,postPet, get_pet_id}