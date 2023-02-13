import express from 'express';
import { createUser, getAllUsers, getUserInfoById } from '../controllers/user.controller.js';

// Import all the controller

const router = express.Router();

router.route('/').get(getAllUsers)
router.route('/:id').get(getUserInfoById);

router.route('/').post(createUser);

export default router;