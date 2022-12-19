import React from 'react'
import { Outlet } from 'react-router-dom'
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/Navbar'


const Main = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <MessengerCustomerChat
                pageId="1374788239506601"
                appId="375233771469010"
            />
            <Footer></Footer>
        </div>
    )
}

export default Main