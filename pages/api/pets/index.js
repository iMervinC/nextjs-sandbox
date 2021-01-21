import dbConnect from '../../../utils/dbConnect'
import {postPet, getPets} from '../../../controller/petsControllers';

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  console.log(req.url, req.method)
  

  switch (method) {
    case 'GET':
      await getPets(req, res)
      break
    case 'POST':
      await postPet(req, res)
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}


