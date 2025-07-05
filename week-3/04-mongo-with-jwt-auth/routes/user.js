const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const user = await User.create({
        username,
        password
    })
    if(user) {
        res.json({
            message: 'User created successfully'
        });
    } else {
        res.status(400).json({
            message: 'User creation failed'
        });
    }


});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const user = await User.findOne({
        username,
        password
    });
    if(!user) {
        return res.status(411).json({
            message: "Incorrect username and password"
        });
    }
    const token = jwt.sign({username},JWT_SECRET);
    res.json({ "token": token });

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({ numberOfCourses: courses.length, courses });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    try{const courseId  = req.params.courseId;
    const course = await Course.findById(courseId);
    if(!course){
        return res.status(404).json({
            message: "Course not found"
        });
    }
    const username = req.username;

    await User.updateOne({username},{
        $push: {
            purchasedCourses: courseId
        }
    });

    res.json({
        message: 'Course purchased successfully',
        courseId: course._id
    });
}catch (error) {
        res.status(500).json({
            message: 'Error purchasing course',
            error: error.message
        });
    }
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({username});
    if(!user){
        return res.status(404).json({
            message: "User not found"
        });
    }
    const purchasedCourses = await Course.find({
        _id: { $in: user.purchasedCourses }})
    res.json({
        purchasedCourses: purchasedCourses,
        numberOfPurchasedCourses: purchasedCourses.length,
        message: "Fetched purchased courses successfully"
});
}
);  

module.exports = router