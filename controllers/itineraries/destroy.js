import Itinerary from "../../models/Itinerary.js";

export default async(req,res,next) => {
    try {
        let deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'Itinerary Delete',
            Response: deleteItinerary._id
        })
    } catch (error) {
        next(error)
    }
}
