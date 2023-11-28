import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
     
            <Link to="Registration">Registeration</Link>
        

      <Outlet />
    </>
  )
};

export default Layout;