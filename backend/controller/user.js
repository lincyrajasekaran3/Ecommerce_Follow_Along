 //importing jwt
 const jwt = require("jsonwebtoken")


 //login endpoint
 router.post("/login", catchAsyncErrors(async (req, res, next) => {


   console.log("Logging in user...");
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please provide email and password", 400));
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Invalid Email or Password", 401));
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password, function(err, result) {
        // result == true
        if(err){
            console.log("error in password",err)
            return next(new ErrorHandler("Invalid Email or Password", 401));
        }
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || "your_jwt_secret",
            { expiresIn: "1h" }
        );
   
        // Set token in an HttpOnly cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // use true in production
            sameSite: "Strict",
            maxAge: 3600000, // 1 hour
        });
        user.password = undefined; // Remove password from response
        res.status(200).json({
            success: true,
            user,
        });


    });
    // console.log("At Auth", "Password: ", password, "Hash: ", user.password);
    // if (!isPasswordMatched) {


    //     return next(new ErrorHandler("Invalid Email or Password", 401));
    // }
     // Generate JWT token
   
   
}));

