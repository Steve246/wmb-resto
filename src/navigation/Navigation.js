import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../shared/hook/useAuth";

const Navigation = () => {
  const { logOut } = useAuth();
  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/home/menu">Menu</Link>
        <Link to="/home/table">Table</Link>
        <button onClick={logOut}>Logout</button>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
