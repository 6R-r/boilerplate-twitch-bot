const EXEMPT = require('../validation/PermissionTypes').EXEMPT;

/**
 * Compares the supplied badges with the required badges.
 * @public
 * @param {Object} currentPermissionsObj  The badges object returned from the TMI
 * @param {Array} requiredPermissionsArr The permissions array from the specified command
 * @returns {Boolean} True if the supplied badges have at least one required badge, false if it doesn't have any required badge
 */
module.exports = (currentPermissionsObj, requiredPermissionsArr) => {

    // if the command doesn't require any badges/permissions, we can return true and run the command
    if(!requiredPermissionsArr || requiredPermissionsArr.length == 0) return true;

    // put all keys from the TMI 'badges' object into an array
    const currentPermsArr = currentPermissionsObj == null ? [] : Object.keys(currentPermissionsObj);

    // if the user has any permission which is exempt from permission handling, we can return true and run the command
    if(EXEMPT.some(perm => currentPermsArr.includes(perm))) return true;

    // otherwise, check if the user has any permissions specified in the command, true : false
    return requiredPermissionsArr.some(perm => currentPermsArr.includes(perm));

}