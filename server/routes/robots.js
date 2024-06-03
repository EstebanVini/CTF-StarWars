const express = require('express');
const router = express.Router();
const path = require('path');
const cacheRoute = require('../middleware/cache');

router.get(/.*/, cacheRoute, async(req,res)=>{
    res.setHeader('Content-type', "application/octet-stream");
    res.setHeader('Content-disposition', 'attachment; filename=robots.txt');
    res.sendFile(path.resolve(__dirname+'/../flag11/robots.txt'));
});


module.exports = router;




