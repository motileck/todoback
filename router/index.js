const Router = require('express').Router;
const userController = require('../controllers/user-controller')
const router = new Router();
const {body} = require('express-validator')
const diaryPropController = require('../controllers/diaryProp-controller')
const diaryController = require('../controllers/diary-controller')
const tableController = require('../controllers/table-controller')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 5, max: 32}),
    userController.registration);
router.post('/login', userController.login);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.post('/createDiaryProp', diaryPropController.createDiaryProp);
router.get('/getAllDiariesProp', diaryPropController.getAllDiariesProp)
router.delete('/deleteDiaryProp/:id', diaryPropController.deleteDiaryProp);
router.post('/createDiary', diaryController.createDiary);
router.get('/getAllDiaries', diaryController.getAllDiaries);
router.delete('/deleteDiary/:id', diaryController.deleteDiary);
router.put('/updateUser/:id', userController.updateUser);
router.post('/createTable', tableController.createTable);
router.get('/getAllTables', tableController.getAllTables);
router.delete('/deleteTable/:id', tableController.deleteTable);

module.exports = router;