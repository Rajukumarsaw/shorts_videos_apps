const express = require('express');
const router=express.Router();

const {editStats, postShortVideos, getAllshortVideos}=require('../controllers/shortVideosController');


router.get('/getAllVideos',getAllshortVideos );
router.post('/addVideos',postShortVideos );
router.put('/editStats/:id',editStats );


module.exports=router;