const User = require("../Model/UserModel");

//Data display for all users
const getAllUsers = async (req, res, next) => {

    let users; // Get all users
    try{
        users = await User.find();
    }catch (err){
        console.log(err);
    }
    // Users not found 
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({ users });     //Display All users 
};

// Data Insert
const addUsers = async (req, res, next) => {
    const {firstName, lastName, phone, email, dob, address, password} = req.body;

    let users;
    try {
        users = new User({firstName, lastName, phone, email, dob, address, password});
        await users.save();
    }catch (err) {
        console.log(err);
    }
    // not insert users
    if (!users){
        return res.status(404).json({message:"unable to add users"});
    }
    return res.status(200).json({ users });
};

// Get by ID

const getById = async (req, res, next) => {

    const id = req.params.id;

    let users;
    try {
        users = await User.findById(id);
    }catch (err) {
        console.log(err);
    }
    // not available users
    if (!users){
        return res.status(404).json({message:"User not found"});
    }
    return res.status(200).json({ users });
};

// Update details
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const {firstName, lastName, phone, email, dob, address, password} = req.body;

    let users;
    try {
        users = await User.findByIdAndUpdate(id,
            {firstName, lastName, phone, email, dob, address, password});
            users = await users.save();
    }catch (err) {
        console.log(err);
    }
    // not available users
    if (!users){
        return res.status(404).json({message:"Unable to Update User Details"});
    }
    return res.status(200).json({ users });
};

// Delete User details
const deleteUser = async (req, res, next) => {

    const id = req.params.id;

    let users;
    try {
        users = await User.findByIdAndDelete(id)
    }catch (err) {
        console.log(err);
    }
    // not available users
    if (!users){
        return res.status(404).json({message:"Unable to delete User Details"});
    }
    return res.status(200).json({ users });
};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;