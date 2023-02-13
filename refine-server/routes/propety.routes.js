import express from 'express';
import { createProperty, deleteProperty, getAllProperties, getProperyDetails, updateProperty } from '../controllers/property.controller.js';

// Import all the controller

const router = express.Router();

router.route('/').get(getAllProperties)
router.route('/:id').get(getProperyDetails);

router.route('/').post(createProperty);

router.route('/:id').patch(updateProperty);
router.route('/:id').delete(deleteProperty);

export default router;