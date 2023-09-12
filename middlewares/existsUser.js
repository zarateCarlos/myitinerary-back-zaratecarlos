import User from "../models/User.js";

export default async(req,res,next) => {

    try {
        let one = await User.findOne({ mail: req.body.mail })
        if (one) {
            return res.status(400).json({
                success: false,
                message: "user has been registered",
                Response: one._id

            })

        } else{
            next()
        }
    } catch (error) {
        return next(error)
    }

}