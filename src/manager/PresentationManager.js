import Dashboard from "../features/home/components/dashboard/Dashboard";
import MenuView from "../features/menu/views/MenuView";
import TableView from "../features/table/views/TableView";

export function PresentationManager(serviceManager) {
    return {
        dashboardPage: <Dashboard/>,
        menuPage: <MenuView service={serviceManager.menuService}/>,
        tablePage: <TableView service={serviceManager.tableService}/>,
        serviceManager: serviceManager
    }

}
