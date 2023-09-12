import { compareSync } from 'bcrypt'
import User from '../models/User.js'

export default async (req, res, next) => {
    try {
        let formPass = req.body.password
        let user = await User.findOne({ mail: req.body.mail })
        let mongoPass = user.password
        let verified = compareSync(formPass, mongoPass)
        if (verified) {
            return next()

        } else {
            return res.status(401).json({
                success: false,
                message: "invalid creedentials",
                response: null,
            })

        }

    } catch (error) {
        return next(error)
    }
}