const DiaryModelProp = require('../models/diaryProp-model')
class DiaryPropService {
    async createDiaryProp(date, sysPressure, adPressure, diaryId){
        const diaryProp = await DiaryModelProp.create({date, sysPressure, adPressure, diaryId});
        return diaryProp;
    }

    async getAllDiariesProp(diaryId){
        const diary = await DiaryModelProp.find({diaryId});
        return diary;
    }

    async deleteDiariesProp(diaryPropId){
        const diary = await DiaryModelProp.findByIdAndDelete(diaryPropId);
        return diary;
    }
}
module.exports = new DiaryPropService();