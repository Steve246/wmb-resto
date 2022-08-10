import {table} from "../model/table";

const tables = [
    table('001', '001', 'A'),
    table('002', '002', 'U'),
    table('003', '003', 'A'),
]

export function tableService() {
    const showAll = function () {
        return tables;
    }
    const addNewTable = function (newTable) {
        tables.push(newTable);
    }
    const deleteTable = function (id) {
        const newListTables = tables.filter(data => data.id !== id);
        while (tables.length > 0) {
            tables.pop();
        }
        for (let i = 0; i < newListTables.length; i++) {
            tables.push(newListTables[i])
        }
    }
    return {
        showAll, addNewTable, deleteTable
    }
}
