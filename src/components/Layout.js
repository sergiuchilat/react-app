import { Outlet, Link } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";

const Layout = () => {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                <nav>
                    <Link color="primary" to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                </Toolbar>
                
            </AppBar>


            <Outlet />
        </>
    )
};

export default Layout;