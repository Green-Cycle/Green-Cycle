const router = require('express').Router();

const {
  
  deleteUser,
  getMyProfile,
  updateProfileName,
  getAllUsers,
} = require('../controllers/users');



// DELETE USER BY ID
router.delete('/:id', deleteUser);

// UPDATE USER
router.patch('/:id', updateProfileName);

// GET MY PROFILE
router.get('/me', getMyProfile);

router.get('/', getAllUsers);
module.exports = router;
