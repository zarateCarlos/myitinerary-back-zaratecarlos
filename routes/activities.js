import { Router } from "express";
import read from "../controllers/activities/read.js";

const activitiesRouter = Router() 

//read
activitiesRouter.get('/', read)

export default activitiesRouter