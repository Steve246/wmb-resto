import { menu } from "../model/menu";

const menus = [
  menu("001", "Ayam Geprek", 23000),
  menu("002", "Ayam Bakar", 22000),
  menu("003", "Ayam Goreng", 20000),
];

export const menuService = ({ doPost, doGet, doDel }) => {
  //   const showAll = function () {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(menus);
  //         // reject('500');
  //       }, 2000);
  //     });
  //   };

  const showAll = async () => {
    try {
      // return await doGet({ url: "/product" });

      const response = await doGet({ url: "/menu" });
      console.log("ini response await showall table", response);
      return response;
    } catch (e) {
      throw e;
    }
  };

  //   url: "/menu",
  //   data: {
  //     id,
  //     menu_name,
  //   },

  //   const addNewMenu = function (newMenu) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         menus.push(newMenu);
  //         resolve(newMenu);
  //       }, 2000);
  //     });
  //   };

  const addNewMenu = async (id, name, price) => {
    try {
      const response = await doPost({
        url: "/menu",
        data: {
          id : id,
          menu: {
            id:id,
            menu_name: name
          },
          menuPrice: price
        },
      });
      console.log("ini response await addNewMenu", response);
      return response
      
    } catch (e) {
      throw e;
    }
  };

  //   const deleteMenu = function (id) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         const newListMenus = menus.filter((data) => data.id !== id);
  //         while (menus.length > 0) {
  //           menus.pop();
  //         }
  //         for (let i = 0; i < newListMenus.length; i++) {
  //           menus.push(newListMenus[i]);
  //         }
  //         resolve(id);
  //       }, 2000);
  //     });
  //   };

  const deleteMenu = (id) => {
    try {
        const response = await doPost({
          url: "/menu/" + id,
        
        });
        console.log("ini response await deleteMenu", response);
        return response
      } catch (e) {
        throw e;
      }
  };

  return {
    showAll,
    addNewMenu,
    deleteMenu,
  };
};
