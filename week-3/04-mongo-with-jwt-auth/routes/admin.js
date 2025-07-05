const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    await Admin.create({
        username,
        password
    });
    res.json({
        message: 'Admin created successfully'
    });

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const user = User.findOne({
        username,
        password
    });
    if(!user) {
        return res.status(411).json({
            message: "Incorrect email and password"
        });
    }
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ "token": token });


});

router.post('/courses', adminMiddleware, async (req, res) => {
    const {title, description, price, imageLink} = req.body;
    const course = await Course.create({
        title, description, price, imageLink
    })
    res.json({
        message: 'Course created successfully', courseId: course._id
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    await Course.find({})
    .then(courses =>{
        res.json({ numberOfCourses: courses.length, courses});
    })
});

module.exports = router;