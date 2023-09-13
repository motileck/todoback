const TableModel = require('../models/table-model')
class TableService {
    async createTable(date, typeAnalysis, userid){
        const table = await TableModel.create({date, typeAnalysis, userid});
        return table;
    }

    async getAllTable(userid){
        const table = await TableModel.find({userid});
        return table;
    }

    async deleteTable(tableId){
        const table = await TableModel.findByIdAndDelete(tableId);
        return table;
    }
}
module.exports = new TableService();