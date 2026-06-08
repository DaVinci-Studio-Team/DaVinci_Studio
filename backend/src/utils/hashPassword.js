const bycrypt = require('bcryptjs');

const hashPassword = async (password) => {
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);
    return hashedPassword;
};

const comparePassword = async(password, hashedPassword) =>{
    return await bycrypt.compare(password, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword
}