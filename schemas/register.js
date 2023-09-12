import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(50).messages({
        'string.min': "Name must have at least 3 characters.",
        'string.max': "Name must be less than 50 characters.",
        'any.required': "Name is required.",
        'string.empty': "Name is required."
    }),
    mail: joi.string().email().required().messages({
        'string.email': "Email must be a valid email address.",
        'any.required': "Email is required.",
        'string.empty': "Email is required."
    }),
    password: joi.string().required().min(3).max(20).messages({
        'string.min': "Password must have at least 3 characters.",
        'string.max': "Password must be less than 20 characters.",
        'any.required': "Password is required.",
        'string.empty': "Password is required."
    }),
    country: joi.string().required().messages({
        'any.required': "Country is required.",
        'string.empty': "Country is required."
    }),
    lastName: joi.string().allow('').optional(), 
    photo: joi.string().allow('').optional().uri().messages({
        'any.uri': "invalid URL",
    }),
});
export default registerSchema;
