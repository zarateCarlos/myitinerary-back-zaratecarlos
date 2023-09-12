import User from "../models/User.js";

export default async(req,res,next) => {

    try {
        let one = await User.findOne({ mail: req.body.mail }, '-_id -__v -password ')
        if (!one) {
            return res.status(400).json({
                success: false,
                message: "user has not been registered",
                Response: null

            })

        } else{
            req.user = one
            next()
        }
    } catch (error) {
        return next(error)
    }

}