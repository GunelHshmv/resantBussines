import React, { useState } from 'react';
import PageContainer from '../../PageContainer';
import styles from '../../Styles';
import Footer from '../../Footer';
import {  Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import EastSharpIcon from "@mui/icons-material/EastSharp";
const News = () => {
    const [news,setNews]=useState([
        {image:"image/resm1.png",title:"“Highland Residence” mənzil satışı başladı",content:"Ölkəmizin ən böyük yaşayış komplekslərindən olan “Park Xırdalan” layihəsində aylıq sadəcə 438 AZN ödəməklə tam təmirli."},
        {image:"image/1607930132_back 1.png",title:"Kapital bankla birgə əməkdaşlığımız",content:"2020-ci ilin oktyabr ayından etibarən “Resant Real Estate” əməkdaşlıq etdiyi şirkətlər siyahısına əlavə edərək, ev sahibi olmaq asanlaşdırıldı."},
        {image:"image/nick-kimel-GrLnSHJT1fI-unsplash 1.png",title:"Xəyal etdiyiniz mənzildə yaşayacaqsınız!",content:"Zövqlü seçimlər və keyfiyyətli inşaat materialları ilə inşa olunan 'City Garden Narimanov' xüsusi mükafat almış layihədir."},
        {image:"image/resm1.png",title:"“Highland Residence” mənzil satışı başladı",content:"Ölkəmizin ən böyük yaşayış komplekslərindən olan “Park Xırdalan” layihəsində aylıq sadəcə 438 AZN ödəməklə tam təmirli."},
        {image:"image/1607930132_back 1.png",title:"Kapital bankla birgə əməkdaşlığımız",content:"2020-ci ilin oktyabr ayından etibarən “Resant Real Estate” əməkdaşlıq etdiyi şirkətlər siyahısına əlavə edərək, ev sahibi olmaq asanlaşdırıldı."},
        {image:"image/nick-kimel-GrLnSHJT1fI-unsplash 1.png",title:"Xəyal etdiyiniz mənzildə yaşayacaqsınız!",content:"Zövqlü seçimlər və keyfiyyətli inşaat materialları ilə inşa olunan 'City Garden Narimanov' xüsusi mükafat almış layihədir."},
        {image:"image/resm1.png",title:"“Highland Residence” mənzil satışı başladı",content:"Ölkəmizin ən böyük yaşayış komplekslərindən olan “Park Xırdalan” layihəsində aylıq sadəcə 438 AZN ödəməklə tam təmirli."},
        {image:"image/1607930132_back 1.png",title:"Kapital bankla birgə əməkdaşlığımız",content:"2020-ci ilin oktyabr ayından etibarən “Resant Real Estate” əməkdaşlıq etdiyi şirkətlər siyahısına əlavə edərək, ev sahibi olmaq asanlaşdırıldı."},
        {image:"image/nick-kimel-GrLnSHJT1fI-unsplash 1.png",title:"Xəyal etdiyiniz mənzildə yaşayacaqsınız!",content:"Zövqlü seçimlər və keyfiyyətli inşaat materialları ilə inşa olunan 'City Garden Narimanov' xüsusi mükafat almış layihədir."},
      ])
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
    return  <PageContainer>
    <div style={styles.container}>
      <div style={{...styles.bgImageStyleHome,
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/news1.png)`,
  }}>
        <div style={styles.homeDiv}>
          <div style={styles.tag}>
            <h1>Son xəbərlər</h1>
          </div>
          <div style={styles.prgTeams}>
            <p>
            Bir çox şirkət bu platformalarda xəbərləri, layihə yeniləmələrini və elanları paylaşır. Resant kimi onlayn press-reliz paylamaşma platformalarına baş çəkin. Şirkətlər çox vaxt vacib elanları paylaşmaq üçün bu platformalardan istifadə edirlər. Tikinti sənayesi nəşrlərində və jurnallarında məqalələr axtarın. Bu mənbələr tez-tez böyük layihələri, sənaye meyllərini və əsas oyunçular haqqında yeniləmələri əhatə edir.
            </p>
          </div>
        </div>
      </div>
      <div style={styles.newsDiv}>
          <span style={styles.ustunSpan}>Xəbərlər</span>
          <div style={styles.xeberDivs} >
    {
      news.map((item)=>(
        <Link to={"/xəbərlər"}>
        <Card style={styles.cardDiv}>
      <CardMedia
        sx={{ height: 300 }}
        image={item.image}
        title={item.title}
      />
      <CardContent style={styles.cardCon}>
        <Typography gutterBottom  variant="h5" component="div" fontSize="30px">
          {item.title}
        </Typography>
        <Typography variant="body2" color="#AEAEAE" fontSize="16px" >
         {item.content}
        </Typography>
      </CardContent>
      <CardActions style={styles.cardaAct}>
      <ThemeProvider theme={theme}>
        <Button style={{ textTransform: 'none' }} size="small" color="primary">Ətraflı Məlumat</Button></ThemeProvider>
        <Button size="small"><EastSharpIcon
                  style={{  fontSize: "40px" ,color:"white"}}
                /></Button>
      </CardActions>
    </Card>
    </Link>
      ))
    }
          </div>
        </div>
      <Footer />
    </div>
  </PageContainer>
}

export default News;