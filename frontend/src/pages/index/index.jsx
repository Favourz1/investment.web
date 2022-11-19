/* eslint-disable react/react-in-jsx-scope */
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { useState, useEffect } from 'react';
import MobileMenu from '../../components/Nav/MobileMenu';
import { useLocation } from 'react-router-dom';

const IndexPage = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(true);
    const pathName = useLocation();
    useEffect(() => {
        setOpenMobileMenu(false);
        return () => {
            setOpenMobileMenu(true);
        };
    }, [pathName]);
    return (
        <div className="flex flex-col h-screen relative ">
            <div className="nav-bar flex-none">
                <Nav openMenu={setOpenMobileMenu} />
            </div>
            {openMobileMenu && <MobileMenu toggleMenu={setOpenMobileMenu} />}
            <div className="page-content grow">
                <Outlet />
            </div>
            <div className="footer flex-none">
                <Footer />
            </div>
        </div>
    );
};

export default IndexPage;
