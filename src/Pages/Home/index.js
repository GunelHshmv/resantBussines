import React, { useState } from "react";
import PageContainer from "../../PageContainer";
import styles from "../../Styles";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import EastSharpIcon from "@mui/icons-material/EastSharp";
import Footer from "../../Footer";
import styled from "styled-components";

const Home = () => {
 const HovDiv = styled.div`
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #272727;
  width: 300px;
  height: 360px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;
const ImgDiv = styled.div`
  width: 610px;
  height: auto; 
  overflow: hidden; 
  transition: width 0.3s ease; 

  &:hover {
    width: 680px;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto; 
    transition: transform 0.3s ease; 
  }

  &:hover img {
    transform: scale(1.1); 
  }
`;


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
  const [firstLine, setFirstLine] = useState([
    {
      first: "20 ilə ipoteka",
      second: "Uzun müddətli ipoteka imkanı yalnız Resant-da",
    },
    {
      first: "Ekoloji təmiz ərazilər",
      second: "Hər zaman ən təmiz ərazilər bizim şirkətimizdə",
    },
    {
      first: "Metro yaxınlığında yerləşmə",
      second: "Sizin üçün ən əlverişli ərazilərdə yerləşmələr var",
    },
    {
      first: "Çoxlu mənzil seçimi",
      second: "İstədiyiniz qədər mənzil seçimi etmək şansınız var",
    },
  ]);
  const [news,setNews]=useState([
    {image:"image/resm1.png",title:"“Highland Residence” mənzil satışı başladı",content:"Ölkəmizin ən böyük yaşayış komplekslərindən olan “Park Xırdalan” layihəsində aylıq sadəcə 438 AZN ödəməklə tam təmirli."},
    {image:"image/1607930132_back 1.png",title:"Kapital bankla birgə əməkdaşlığımız",content:"2020-ci ilin oktyabr ayından etibarən “Resant Real Estate” əməkdaşlıq etdiyi şirkətlər siyahısına əlavə edərək, ev sahibi olmaq asanlaşdırıldı."},
    {image:"image/nick-kimel-GrLnSHJT1fI-unsplash 1.png",title:"Xəyal etdiyiniz mənzildə yaşayacaqsınız!",content:"Zövqlü seçimlər və keyfiyyətli inşaat materialları ilə inşa olunan 'City Garden Narimanov' xüsusi mükafat almış layihədir."},
  ])

  return (
    <PageContainer>
      <div style={styles.container}>
        <div style={styles.bgImageStyleHome} >
          <div style={styles.homeDiv}>
            <div style={styles.tag}>
              <h1>
                28 May m/s-dan
                <br /> 5 dəqiqəlik məsafədə
              </h1>
            </div>
            <div style={styles.prg}>
              <p>
                Qüsursuz infrastruktura malik bu layihəmiz ümumilikdə 9 nəhəng
                binadan ibarətdir. Bütün binaları birləşdirən yaşıllıqlarla dolu
                qapalı həyətin böyüklüyü isə 4ha-dır! Bütün bunlarla yanaşı
                mənzil sayına uyğun geniş yeraltı avtodayanacaq və 7/24 mühafizə
                sistemi də bu özəl layihəmizdə mövcuddur.
              </p>
            </div>
            <div>
              <Link to={"/layihələr"}>
                <button style={styles.homeBtn}>Etrafli Melumat</button>
              </Link>
            </div>
          </div>
        </div>

        <div style={styles.ustunDiv}>
          <span style={styles.ustunSpan}>
            <p>Üstünlüklərimiz</p>
          </span>
          <div style={styles.ustunDivs}>
            
            {firstLine.map((item,index) => (
              
              <HovDiv key={index}  >
            
            
                <img
                  src={process.env.PUBLIC_URL + "image/Mask group.png"}
                  alt="Maske"
                />
                <span
                  style={{
                    padding: "26px",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {item.first} <br />
                  <br /> {item.second}
                </span>
                <ThemeProvider theme={theme}>
                  <Link to={"/haqqımızda"}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={styles.oxuBtn}
                    >
                      Ətrafı oxu
                    </Button>
                  </Link>
                </ThemeProvider>
              </HovDiv>
            ))}
          </div>
        </div>

        <div style={styles.layiDiv}>
          <span style={styles.ustunSpan}>Layihələr</span>
          <div style={styles.layiImgDiv}>
            <ImgDiv>
            <div style={{ position: "relative",width:"100% "}}>
              <Link to={"/layihələr"}>
               <Box
                  sx={{
                    "&:before": {
                      content: '""',
                      width: "610px",
                      height: "100%",
                      position: "absolute",
                      background: "rgba(0,0,0, 0.3)",
                    },
                  }}
                ></Box>
              </Link>
             
             <img
                style={styles.layiImg}
                src={process.env.PUBLIC_URL + "image/Rectangle 1.png"}
                alt="Maske"
              />
              <div style={styles.resmSpan}>
                <div>
                  <b style={{ fontSize: "28px" }}>Binəqədi Park binası</b>
                  <br />
                  <span style={{ fontSize: "20px" }}>
                    Binəqədi Ticarət Mərkəzinin yaxınlığı
                  </span>
                </div>
                <EastSharpIcon
                  color="white"
                  style={{ marginLeft: "100px", fontSize: "60px" }}
                />
              </div>
            </div>
            </ImgDiv>

                  <ImgDiv>
            <div style={{ position: "relative" }}>
              <Link to={"/layihələr"}>
                <Box
                  sx={{
                    "&:before": {
                      content: '""',
                      width: "610px",
                      height: "100%",
                      position: "absolute",
                      background: "rgba(0,0,0, 0.3)",
                    },
                  }}
                ></Box>
              </Link>
              <img
                style={styles.layiImg}
                src={process.env.PUBLIC_URL + "image/rg2.png"}
                alt="Maske"
              />
              <div style={styles.resmSpan}>
                <div>
                  <b style={{ fontSize: "28px" }}>Abşeron Park</b>
                  <br />
                  <span style={{ fontSize: "20px" }}>AF parkın yaxınlığı</span>
                </div>
                <EastSharpIcon
                  color="white"
                  style={{ marginLeft: "200px", fontSize: "60px" }}
                />
              </div>
            </div>
            </ImgDiv>
          </div>
        </div>

        <div style={styles.newsDiv}>
          <span style={{...styles.ustunSpan,marginTop:'1px'}}>Xəbərlər</span>
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
        <div >
          <Footer/>
        </div>
      </div>
    </PageContainer>
  );
  
};

export default Home;
