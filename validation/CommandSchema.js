const joi = require('@hapi/joi');
const VALID_PERMISSIONS = require('./PermissionTypes').VALID_PERMISSIONS;

/**
 * Validation for command files.
 * Change this when needed or when extending your system for more capabilities.
 */
const CommandSchema = joi.object({
    name: joi.string().min(1).max(32).required(),
    aliases: joi.array().items(joi.string()),
    permissions: joi.array().items(joi.string().valid(...VALID_PERMISSIONS)),
    run: joi.function().required()
});

module.exports = CommandSchema;