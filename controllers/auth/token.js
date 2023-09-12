export default (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            massage: 'user logged in with token',
            response: {
                token: req.token,
                user: req.user

            }

        })
    } catch (error) {
        return next(error)
    }
}