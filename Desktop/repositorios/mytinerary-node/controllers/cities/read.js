import City from "../../models/City.js";


export default async (req, res, next) => {
    try {
        let objetoDeBusqueda = {}
        let objetoDeOrdenamiento = {}

        if (req.query.admin_id) {
            objetoDeBusqueda.admin_id = req.query.admin_id
        }

        if (req.query.city) {
            objetoDeBusqueda.city = RegExp(req.query.city, 'i')
        }

        if (req.query.sort) {
            objetoDeOrdenamiento.city = req.query.sort
        }

        let allcities = await City
            .find(objetoDeBusqueda, 'country city photo salldescription admin_id')
            .populate('admin_id', 'photo name mail -_id')
            .sort(objetoDeOrdenamiento)
        return res.status(200).json({
            success: true,
            message: 'user found',
            response: allcities
        })

    } catch (error) {

        next(error)


    }

}