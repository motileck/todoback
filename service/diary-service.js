const DiaryModel = require("../models/diary-model");
const DiaryPropModel = require("../models/diaryProp-model")
class DiaryService {
    async createDiary(name, date, userid, type){
        const diary = await DiaryModel.create({name,date, userid, type});
        return diary;
    }

    async getAllDiaries(userid){
        const diaryAll = await DiaryModel.find({userid});
        return diaryAll;
    }

    async deleteDiary(diaryId){
        const diary = await DiaryModel.findByIdAndDelete(diaryId);
        const diaryProps = await DiaryPropModel.deleteMany({diaryId:diaryId});
        return {diary, diaryProps};
    }

}
module.exports = new DiaryService();