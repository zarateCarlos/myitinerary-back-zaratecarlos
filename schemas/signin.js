import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().email().required().messages({
        'string.email': "Email must be a valid email address.",
        'any.required': "mail is required!",
        'string.empty': "mail is required"
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters please!",
        'string.max': "password must be less than 21 caracters please!",
        'any.required': "password is required!",
        'string.empty': "password is required"
    }),

})

export default signinSchema