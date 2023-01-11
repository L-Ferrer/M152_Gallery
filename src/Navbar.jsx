import { Outlet } from "react-router-dom";

const renderForm = (
    <div className="navbar">
        <a href="/" className='nav_child'>Home</a>
        <a href="/gallery" className='nav_child'>Gallery</a>
        <a href="/video" className='nav_child'>Video</a>
    </div>
);

const Navbar = () => {
    return (
        <>
            {renderForm}
            <Outlet />
        </>
    )
};

export default Navbar;