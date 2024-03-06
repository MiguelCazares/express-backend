const { ROLES_PERMISSIONS } = require('../configs/modulesAndPermissions');

const validatePermissions = (module_name, role) => {
  try {
    if (!module_name || !role) {
      throw new Error('Module name and role are required');
    }

    if (!ROLES_PERMISSIONS[role]) {
      throw new Error('Role not found');
    }

    if (!ROLES_PERMISSIONS[role].includes(module_name)) {
      throw new Error('Permission denied');
    }

    return true;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  validatePermissions,
};
