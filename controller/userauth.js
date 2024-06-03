const UserModel = require("../module/userauth")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

jwtSecretKey = "JWT_SECTER_KEY_GENERATED_ABESH2030"

const signUp = async (req, res) => {

    const salt = bcrypt.genSaltSync(7);

    const passwordHash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new UserModel({...req.body, password: passwordHash});
    const userDetail = await newUser.save();
    console.log(userDetail._id);
    res.json({
        success: true,
        message: "user has been registered successfully"
    })
}


const login = async (req, res) => {

    const user = await UserModel.findOne({ email : req.body.email});
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
    if (!user) {
        return res.json({
            message: "No user is found with this emailid, please register first"
        })
    }

    const payload = {
        userid: user._id,
        name: user.name
    }

    const token = jwt.sign(payload, jwtSecretKey)

    if (isPasswordValid) {
        res.json({
            token
        })
    }


    res.json({
        success: true,
        message: "username or password is incorrect"
    })
}

const allControllers = {
    signUp,
    login
}

module.exports = allControllers;