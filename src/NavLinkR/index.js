import React, { useState } from 'react';
import Customized from './Customized';
import styles from '../Styles';
import SearchIcon from '@mui/icons-material/Search';
const NavLinkR = () => {
    const [links,setLinks]=useState(["Ana Səhifə" ,"haqqımızda", "layihələr" ,"xəbərlər", "komandamız", "əlaqə"])
    return <div style={styles.navlink}>
        <div>
            <img src={process.env.PUBLIC_URL + 'image/image 1.png'} />
        </div>
        <div style={styles.links} >
        {
            links.map((item)=>(
                <Customized text={item.charAt(0).toUpperCase() + item.slice(1)} to={`/${item}`}/>
            ))
        }
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"120px",gap:"14px"}}>
            <div style={styles.leftStyles}>
               AZ
            </div>
<div style={{color:"white"}}>
<SearchIcon fontSize='large' />

</div>
        </div>
    </div>;
}

export default NavLinkR;