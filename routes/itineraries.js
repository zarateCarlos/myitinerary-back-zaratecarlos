import { Router } from "express";
import read from "../controllers/itineraries/read.js";
import create from "../controllers/itineraries/create.js";
import destroy from "../controllers/itineraries/destroy.js";
import update from "../controllers/itineraries/update.js";
const itinerariesRouter = Router() 

//create
itinerariesRouter.post('/', create)
//update
itinerariesRouter.put('/:id', update)

//read
itinerariesRouter.get('/', read)

//delete
itinerariesRouter.delete('/:id', destroy)

export default itinerariesRouter