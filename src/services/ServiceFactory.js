import { loginService } from "./loginService";
import { menuService } from "./menuService";
import { productService } from "./ProductService";
import { tableService } from "./tableService";

export const serviceFactory = (apiClient) => {
  return {
    loginServices: loginService(apiClient),

    menuServices: menuService(apiClient),

    tableServices: tableService(apiClient),
  };
};
