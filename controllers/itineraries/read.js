import Itinerary from "../../models/Itinerary.js";


export default async (req, res, next) => {
    try {
        let queries = {}
        if(req.query.city_id) {
            queries.city_id = req.query.city_id
        }

        let allitineraries = await Itinerary
            .find(queries)
            .populate({
                path: "city_id",
                select: "city photo admind_id",
                populate: {
                    path: "admin_id",
                    select: "name photo"
                }
            })

        return res.status(200).json({
            success: true,
            message: 'itineraries found',
            response: allitineraries
        })

    } catch (error) {

        next(error)


    }

}