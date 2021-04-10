import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Main from '../Main/Main';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Header.css'


const Header = () => {
    return (
        <div class="header-container">
            <NavigationBar/>
            <Main/>
            <BusinessInfo/>
        </div>
    );
};

export default Header;