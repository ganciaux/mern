import express from 'express';
import {
  authUser,
  logoutUser,
  profileUser,
  registerUser,
  updateUser
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(protect, profileUser).put(protect, updateUser);

export default router;
