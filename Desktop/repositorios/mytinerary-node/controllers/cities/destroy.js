import City from "../../models/City.js";


export default async(req,res) => {
    try {
        let deleteCities = await City.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'city deleted',
            response: deleteCities._id
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'city not deleted',
            response: null
        })

    }

}