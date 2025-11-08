import Footer from '../Footer';
import Navbar from './../Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;