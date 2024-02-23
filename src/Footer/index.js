import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from '../Styles';
import { Link } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
    const [links,setLinks]=useState(["Ana Səhifə" ,"layihələr","komandamız","haqqımızda","xəbərlər", "əlaqə"])
    const theme = createTheme({
        palette: {
          primary: {
            main: "#FFFF00", 
          },
          text: {
            primary: "#242105", 
          },
        },
      });
    return (
        <footer style={styles.footerS}>
            <div>
                <span style={styles.footSpan}>Sonsuz ideyaların<br/>məkanı!</span>
            </div>
            <div style={styles.footDiv}>
              <div style={styles.footLinks}>
              {
                    links.map((item)=>(
                        <span style={styles.footLinkSpan}><Link style={styles.inLink} to={item=== "Ana Səhifə" ? "/" : `/${item}`}>      
                        <ThemeProvider theme={theme}><MoreVertIcon color='primary'/></ThemeProvider>
                        {item.charAt(0).toUpperCase() + item.slice(1)}</Link></span>
                    ))
                }
              </div>
              <div style={styles.aboneDiv}>
                <span style={styles.xSpan}>Xəbərlərimizə abonə olun</span>
                <span style={{color:"white"}}>Korporasiyamızın son günləri və ən son <br/>promosyonları haqqında məlumat əldə edin </span>
                <div style={{display:"flex"}}>
                    <input type='email' placeholder='Email' style={styles.inpFoot}/>
                    <div style={styles.emailDiv}><SendIcon color='white'/></div>
                </div>
              </div>
            </div>
            <div>
            <Link to={ '/'}>
            <img style={{height:"140px"}} src={process.env.PUBLIC_URL + 'image/image 1.png'} />
                </Link>
        </div>
        <div style={styles.copyDiv}>
            <div >Copyright © 2020 Small change. Big change.</div>
            <div style={{marginRight:"220px",display:"flex",gap:"4px"}}>
                <Link style={{color:"white"}} to={"https://www.instagram.com/"}><InstagramIcon/></Link>
                <Link style={{color:"white"}} to={"https://twitter.com/?lang=tr"}><TwitterIcon/></Link>
                <Link style={{color:"white"}} to={"https://www.linkedin.com/feed/"}><LinkedInIcon/></Link>
                <Link style={{color:"white"}} to={"https://www.facebook.com/"}><FacebookIcon/></Link>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
