import {loginService} from "../services/loginService";
import {tableService} from "../services/tableService";
import {menuService} from "../services/menuService";

export function ServiceManager() {
    return {
        loginService: loginService(),
        tableService: tableService(),
        menuService: menuService()
    }
}
