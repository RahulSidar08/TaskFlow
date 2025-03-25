import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register = async (req,res) => {
    try {
        let {username , email , password}  = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        let existingUser = await User.findOne({email})
        if(existingUser)
        {
            return res.status(200).json({
                success : false,
                message : "User ALready Exist,please login"
            })
        }

        let hashedPassword = await bcrypt.hash(password,10);

        let user = await User.create({
            username,
            email,
            password : hashedPassword
        })
        
        return res.status(200).json({
            success : true,
            message : "User Registered SUccessfully",
            user
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success : false,
            message : "Something went wrong",
            Error : error
        })
    }
}

export const login  = async (req,res) => {
    try {
        let {email,password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        let user = await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({
                success : false,
                message : "User does not exist"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        };

        const tokenData = {
            userId: user._id
        }

        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.username}`,
            user,
            token,
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success : false,
            message : "Something went wrong",
            Error : error
        })
    }
}

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}