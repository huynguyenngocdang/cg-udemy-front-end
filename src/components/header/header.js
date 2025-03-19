import React from 'react';
import HeaderPopup from "./headerPopup";
import HeaderPrimary from './headerPrimary';

function Header() {
    return (
        <div>
        <HeaderPopup /> {/* Limited Offer PopUP on top */}
        <HeaderPrimary /> {/* // Primary Header  */}
        </div>
    );
}

export default Header;