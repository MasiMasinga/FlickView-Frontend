const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config();

const Register = () => {};

const Login = () => {};

const ForgotPassword = () => {};

const ResetPassword = () => {};

const Logout = () => {};

module.exports = {
    Register,
    Login,
    ForgotPassword,
    ResetPassword,
    Logout,
};