const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    postUser,
    putUserById,
    deleteUserById,
    addFriend,
    removeFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(postUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(putUserById).delete(deleteUserById);

// Add and delete a friend
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
