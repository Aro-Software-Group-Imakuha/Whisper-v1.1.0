const crypto = require('crypto');

// Function to encrypt a password
function encryptPassword(password) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return { salt, hash };
}

// Function to validate a password
function validatePassword(password, salt, hash) {
    const hashToValidate = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    return hash === hashToValidate;
}

// Function to store user data securely
function storeUserData(displayName, password) {
    const { salt, hash } = encryptPassword(password);
    // Store user data (for demonstration purposes, using localStorage)
    localStorage.setItem('user', JSON.stringify({ displayName, salt, hash }));
}

// Function to ensure no personally identifiable information is collected
function ensureNoPII(data) {
    const allowedKeys = ['displayName', 'password'];
    return Object.keys(data).reduce((acc, key) => {
        if (allowedKeys.includes(key)) {
            acc[key] = data[key];
        }
        return acc;
    }, {});
}

module.exports = {
    encryptPassword,
    validatePassword,
    storeUserData,
    ensureNoPII
};
