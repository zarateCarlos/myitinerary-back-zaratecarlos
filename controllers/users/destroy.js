import User from "../../models/User.js";


export default async(req,res) => {
    try {
        let deleteUsers = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'user deleted',
            response: deleteUsers._id
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not deleted',
            response: null
        })

    }

}