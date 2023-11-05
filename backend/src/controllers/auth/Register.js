const authService = require("../../services/auth/auth.service");
const helper = require("../../utils/helper");

const Register = async (req, res) => {
    try {
        

        const user = authService.Register(data);

        return res.send(user);
    } catch (error) {
        return helper.handleError(error, req, res);
    }
};

module.exports = { Register };