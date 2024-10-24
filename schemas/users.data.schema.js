const Joi = require("joi");

const schema201PostUsers = Joi.object({
    message: Joi.string().required(),
    _id: Joi.string().required(),
});

module.exports = schema201PostUsers;
