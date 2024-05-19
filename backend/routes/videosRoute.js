const express = require('express');
const router=express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const {editStats, postShortVideos, getAllshortVideos,getUserVideos}=require('../controllers/shortVideosController');


router.get('/getAllVideos',getAllshortVideos );
router.post('/upload', upload.single('video'), postShortVideos );
router.put('/editStats/:id',editStats );
router.post('/getUserVideos', getUserVideos)


module.exports=router;