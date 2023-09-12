import User from "../../models/User.js"

export default async (req, res, next) => {
    try {
        let newUser = await User.create(req.body); // Crea el nuevo usuario
        let userWithDetails = await User.findById(newUser._id); // Busca el usuario recién creado con todos los detalles
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            response: {
                user: userWithDetails, // Incluye los datos completos del usuario
            }
        });
    } catch (error) {
        next(error);
    }
}
