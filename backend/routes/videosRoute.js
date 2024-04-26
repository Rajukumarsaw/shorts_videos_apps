const express = require('express');
const router=express.Router();

const {postShortVideos, getAllshortVideos}=require('../controllers/shortVideosController');


router.get('/getAllVideos',getAllshortVideos );
router.post('/addVideos',postShortVideos );

module.exports=router;