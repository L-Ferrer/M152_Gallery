import { Outlet } from "react-router-dom";

const navbar = (
    <div className="navbar">
        <a href="/" className='nav_child'>Home</a>
        <a href="/gallery" className='nav_child'>Gallery</a>
        <a href="/video" className='nav_child'>Video</a>
    </div>
);

const footer = (
    <div className="footer">
        <p>© 2023 Leandro Ferrer</p>
    </div>
);

const Layout = () => {
    return (
        <>
            {navbar}
            <Outlet />
            {footer}
        </>
    )
};

export default Layout;