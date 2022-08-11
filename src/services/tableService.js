import { tab } from "@testing-library/user-event/dist/tab";
import { table } from "../model/table";

const tables = [
  table("001", "001", "A"),
  table("002", "002", "U"),
  table("003", "003", "A"),
];

export function tableService() {
  //   const showAll = function () {
  //     return tables;
  //   };

  const showAll = async () => {
    try {
      // return await doGet({ url: "/product" });

      const response = await doGet({ url: "/table" });
      console.log("ini response await showall table", response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  //   const addNewTable = function (newTable) {
  //     tables.push(newTable);
  //   };

  const addNewTable = async (id, tableNumber, status) => {
    try {
      const response = await doPost({
        url: "/table",
        data: {
          tableId: id,
          tableName: tableNumber,
          is_available: status
        },
      });
      console.log("ini response await addNewTable", response);
      return response;
    } catch (e) {
      throw e;
    }
  };

//   const deleteTable = function (tableId) {
//     const newListTables = tables.filter((data) => data.id !== id);
//     while (tables.length > 0) {
//       tables.pop();
//     }
//     for (let i = 0; i < newListTables.length; i++) {
//       tables.push(newListTables[i]);
//     }
//   };

  const deleteTable = (id) => {
    try {
        const response = await doPost({
          url: "/table/" + id,
        
        });
        console.log("ini response await deleteTable", response);
        return response
      } catch (e) {
        throw e;
      }
  };


  return {
    showAll,
    addNewTable,
    deleteTable,
  };
}
