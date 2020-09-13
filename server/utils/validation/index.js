const yup = require('yup')

module.exports.USER_CREATE_SCHEMA = yup.object({
    firstName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Name must contain only alphabetic characters').required(),
    lastName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Surname must contain only alphabetic characters').required(),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    gender: yup.string().oneOf(['male', 'female', 'other']).required(),
    password: yup.string().matches(
        /(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z])^.{8,40}$/,
        'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    ).required(),
})

module.exports.USER_UPDATE_SCHEMA = yup.object({
    firstName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Name must contain only alphabetic characters'),
    lastName: yup.string().trim().min(2).matches(
        /^([a-zа-яё]+|\d+)$/i, 'Surname must contain only alphabetic characters'),
    email: yup.string().email(),
    age: yup.number().positive().integer(),
    gender: yup.string().oneOf(['male', 'female', 'other']),
    password: yup.string().matches(
        /(?=.*?[a-z])(?=.*?\d)(?=.*?[A-Z])^.{8,40}$/,
        'Your password must be at least 8 characters long, be of mixed case and also contain a digit or symbol.'
    ),
})