const tableService = require("../service/table-service");

class TableController {
    async createTable(req, res) {
        try {
            const {date, typeAnalysis, userid} = req.body;
            const tableData = await tableService.createTable(date, typeAnalysis, userid);
            return res.json(tableData);
        } catch (e) {
            console.log(e)
        }
    }

    async getAllTables(req, res) {
        try {
            const userid = req.query.userid;
            const tablesAll = await tableService.getAllTable(userid);
            return res.json(tablesAll);
        } catch (e) {
            console.log(e)
        }
    }

    async deleteTable(req, res) {
        try {
            const tableId = req.params.id;
            const deletedTable = await tableService.deleteTable(tableId);
            return res.json(deletedTable);
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new TableController();