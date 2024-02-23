import React, { useState } from 'react';
import Customized from './Customized';
import styles from '../Styles';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const NavLinkR = () => {
    const [links,setLinks]=useState([{to:"/",text:"Ana sehife"} ,{to:"/haqqımızda",text:"Haqqımızda"}, {to:"/layihələr",text:"Layihələr"} ,{to:"/xəbərlər",text:"Xəbərlər"}, {to:"/komandamız",text:"Komandamız"}, {to:"/əlaqə",text:"Əlaqə"}])
    return <div style={styles.navlink}>
        <div>
            <Link to={ '/'}>
            <img src={process.env.PUBLIC_URL + 'image/image 1.png'} />
            </Link>
        </div>
        <div style={styles.links} >
        {
            links.map((item)=>(
                <Customized text={item.text } to={item.to}/>
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