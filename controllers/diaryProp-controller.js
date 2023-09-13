const diaryPropService = require('../service/diaryProp-service');
class DiaryPropController {
    async createDiaryProp(req, res){
        try {
            const {date, sysPressure, adPressure, diaryId} = req.body;
            const diaryData = await diaryPropService.createDiaryProp(date, sysPressure, adPressure, diaryId);
            return res.json(diaryData);
        }catch (e){
            console.log(e)
        }

    }

    async getAllDiariesProp(req,res){
        try {
            const diaryId = req.query.diaryId;
            const diaries = await diaryPropService.getAllDiariesProp(diaryId);
            return res.json(diaries);
        }catch (e) {
            console.log(e)
        }
    }

    async deleteDiaryProp(req,res){
        try{
            const diaryPropId = req.params.id;
            const deletedDiary = await diaryPropService.deleteDiariesProp(diaryPropId);
            return res.json(deletedDiary);
        }catch (e) {

        }
    }
}

module.exports = new DiaryPropController();