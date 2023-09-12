import { Router } from "express";
import register from "../controllers/auth/register.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";
import existsUser from "../middlewares/existsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import signin from "../controllers/auth/signin.js";
import signinSchema from "../schemas/signin.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isPassOk from "../middlewares/isPassOk.js";
import isValidToken from "../middlewares/isValidToken.js";
import token from "../controllers/auth/token.js";
import passport from "../middlewares/passport.js";
import signout from "../controllers/auth/signout.js";

let auth_router = Router()

auth_router.post('/signup',validator(registerSchema),existsUser,isValidPass,register)
auth_router.post('/signin',validator(signinSchema),notExistsUser,isPassOk,isValidToken, signin)
auth_router.post('/token',passport.authenticate('jwt',{session:false}),isValidToken, token)
auth_router.post('/signout',passport.authenticate('jwt',{session:false}) ,signout)
export default auth_router