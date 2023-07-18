const express = require('express');
const router = express.Router();
const model = require('../modules/Account');
const jwt = require('jsonwebtoken');

router.use('/', (req, res, next) => {
    console.log(req.headers.authorization)
    if(req.headers.authorization){
        jwt.verify(
            req.headers.authorization,
            'dev-net',
            (err, decoded) => {
                if(err){
                    console.log(err);
                    res.status(401).json({
                        message: 'Не авторизировано',
                        error: err
                    })
                }
                req.user = {
                    email: decoded.email,
                    id: decoded.userId
                }
            }
        )

    }
    next();
})

router.get('/calls', async (req, res) => {
    if(req.user){
        console.log("User OK")
        const result = await model.getCalls(req.user).catch((err) =>{
            console.warn(err);
        })
        console.log(result);
        res
        .status(200)
        .json(result);
    }
    else{
        console.log('Not User');
    }

})

router.get('/calls/today', async (req, res) => {
    const result = await model.getCallsToday(req.user.id);
    console.log(result);
    res.sendStatus(200);
})

router.get('/calls/yesturday', async (req, res) => {
    console.log(await model.getCallsYesturday(req.user.id));
    res.sendStatus(200);
})

router.post('/calls/add-one', (req, res) => {
    model.setCalls(
        {
            id: req.user.id,
            email: req.user.email,
            number: req.body.number,
            sites: req.body.sites,
            dateCall: req.body.dateCall,
            timeCall: req.body.timeCall,
            numberClient: req.body.numberClient,
            numberManager: req.body.numberManager
        }
    )
    .then(()=>{
        res.status(200).json({
            message: 'Звонок состоялся'
        })
    })
    .catch((err) => {
        res.status(404).json({
            message: 'Звонка не было'
        })
    })


    
    // if(
    //     model.setCalls(
    //         {
    //             id: req.user.id,
    //             email: req.user.email,
    //             number: req.body.number,
    //             sites: req.body.sites,
    //             dateCall: req.body.dateCall,
    //             timeCall: req.body.timeCall,
    //             numberClient: req.body.numberClient,
    //             numberManager: req.body.numberManager
    //         }
    //     )
    // ){
    //     res.status(200).json({
    //         message: 'Звонок состоялся'
    //     })
    // }

    // else{
    //     res.status(404).json({
    //         message: 'Звонка не было'
    //     })
    // }
})

router.post('/tarrif/add', async (req, res) => {
    await model.setDateTariff(req.body.date, req.user.id)
    .then(res.sendStatus(200))
    .catch((err) => {
        console.warn(err)
    });

})



router.get('/vidgets', (req, res) => {
    res.send('vidgets get').json();
})

router.get('/statistic', (req, res) => {
    res.send('statistic get').json();
})


module.exports = router;