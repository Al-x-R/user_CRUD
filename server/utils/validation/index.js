const yup = require('yup')

module.exports.USER_VALIDATION_SCHEMA = yup.object({
    firstName: yup.string().trim().required(),
    lastName: yup.string().trim().required(),
    email: yup.string().email().required(),
    age: yup.number().required().positive().integer(),
    gender: yup.string().oneOf(['male', 'female', 'other']).required(),
    password: yup.string().matches(
        /(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z])^.{8,40}$/,
        'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    ).required(),
})