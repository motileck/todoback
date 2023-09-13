const diaryService = require("../service/diary-service");

class DiaryController{
    async createDiary(req,res){
        try {
            const {name, date, userid, type} = req.body;
            const diaryData = await diaryService.createDiary(name, date, userid, type);
            return res.json(diaryData);
        }catch (e) {
            console.log(e)
        }
    }

    async getAllDiaries(req,res){
        try {
            const userid = req.query.userid;
            const diariesAll = await diaryService.getAllDiaries(userid);
            return res.json(diariesAll);
        }catch (e) {
            console.log(e)
        }
    }

    async deleteDiary(req,res){
        try {
            const diaryId = req.params.id;
            const deletedDiary = await diaryService.deleteDiary(diaryId);
            return res.json(deletedDiary);
        }catch (e) {
            console.log(e)
        }
    }
}

module.exports = new DiaryController();