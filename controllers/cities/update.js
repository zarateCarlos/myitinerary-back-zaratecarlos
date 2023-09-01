import City from "../../models/City.js";


export default async(req, res) => {
    try {
        let updateCities = await City.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true}
        ).select('name photo')
        return res.status(200).json({
            success: true,
            message: 'city updated',
            response: updateCities
        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'city not updated',
            response: null
        })

    }

}