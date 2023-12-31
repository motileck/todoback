const userService = require('../service/user-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error')
class UserController{
    async registration(req, res, next){
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {email, password, userName} = req.body;
            const userData = await userService.registration(email,password, userName);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:true})
            return res.json(userData);
        }catch (e) {
            next(e);
        }
    }
    async login(req, res, next){
        try{
            const {email, password} = req.body;
            const userData = await userService.login(email,password);
            return res.json(userData);
        }catch (e) {
            next(e);
        }
    }

    async activate(req, res, next){
        try{

        }catch (e) {

        }
    }
    async refresh(req, res){
        try{
            const {refreshToken} = req.cookies;
            const userData = await userService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:true})
            return res.json(userData);
        }catch (e) {

        }
    }
    async updateUser(req, res){
        try{
            const userid = req.params.id;
            const {userName, email} = req.body;
            const newUser = await userService.update(userid, userName, email);
            return res.json(newUser);
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserController();