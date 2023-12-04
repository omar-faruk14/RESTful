
const express = require('express');
const router = express.Router();
const {set_k, set_facilities,set_map, image_r}=require('../Components/A')
router.get('/events', set_k);
router.get('/facilities',set_facilities);
router.get('/map',set_map);

router.get('/fetchImage/:fileKey', image_r);


module.exports = router;