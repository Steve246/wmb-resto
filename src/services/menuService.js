import {menu} from "../model/menu";

const menus = [
    menu('001', 'Ayam Geprek', 23000),
    menu('002', 'Ayam Bakar', 22000),
    menu('003', 'Ayam Goreng', 20000),
];

export function menuService() {
    const showAll = function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(menus);
                // reject('500');
            }, 2000)
        });
    }
    const addNewMenu = function (newMenu) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                menus.push(newMenu);
                resolve(newMenu);
            }, 2000)
        });

    }
    const deleteMenu = function (id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const newListMenus = menus.filter(data => data.id !== id);
                while (menus.length > 0) {
                    menus.pop();
                }
                for (let i = 0; i < newListMenus.length; i++) {
                    menus.push(newListMenus[i])
                }
                resolve(id);
            }, 2000)
        });

    }
    return {
        showAll, addNewMenu, deleteMenu
    }
}
