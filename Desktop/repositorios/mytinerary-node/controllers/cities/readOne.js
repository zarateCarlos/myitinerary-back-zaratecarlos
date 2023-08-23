import City from "../../models/City.js";


export default async(req,res) => {
    try {
        let oneCities = await City.findOne({ _id:req.params.city_id }).select("city photo -_id")
        return res.status(200).json({
            success: true,
            message: 'city found',
            response: oneCities
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'city not found',
            response: null
        })

    }

}