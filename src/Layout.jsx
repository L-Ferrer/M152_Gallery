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
        <p>© Leandro Ferrer 2023</p>
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