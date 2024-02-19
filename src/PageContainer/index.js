import React from 'react';
import NavLinkR from '../NavLinkR';
const PageContainer = ({children}) => {
    return <div >
        <NavLinkR/>
        {children}
    </div>;
}
export default PageContainer;