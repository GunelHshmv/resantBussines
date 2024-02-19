import React, { useState } from "react";
import PageContainer from "../../PageContainer";
import styles from "../../Styles";
import Footer from "../../Footer";

const Teams = () => {
  const [about, setAbout] = useState([
    {
      title: "Alex Turner",
      profession:"Şirkətin qurucusu",
      content:
        "Resantın uzaqgörən qurucusu və hərəkətverici qüvvəsi Alex Turnerlə tanış olun. Tikintiyə olan həvəsi və mükəmməlliyə amansız bağlılığı ilə Alex sənayedə uğur mirası qurmuşdur.",
      image: "image/teams2.png",
    },
    {
      title: "Saleh Əkbərli",
      profession:"İdarə heyətinin sədri",
      content:
        "Resant İdarə Heyətinin hörmətli Sədri Saleh Əkbərli  ilə tanış olun. Biznes sahəsində görkəmli karyerası və böyümə və strateji inkişafı təşviq etmək həvəsi ilə Saleh şirkətin rəhbərliyinə zəngin təcrübə gətirir.",
      image: "image/teams3.png",
    },
    {
      title: "Sultan Abıyev",
      profession:"Baş maliyyə direktoru",
      content:
        "Resant şirkətinin təcrübəli Baş Maliyyə Direktoru Sultan Abıyev ilə tanış olun. Maliyyə idarəçiliyində sübut edilmiş təcrübə və strateji düşüncə ilə Sultan şirkətin maliyyə sağlamlığının və sabitliyinin təmin edilməsində mühüm rol oynayır.",
      image: "image/teams4.png",
    },
  ]);
  return (
    <PageContainer>
      <div style={styles.container}>
        <div style={{...styles.bgImageStyleHome,
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/teams1.png)`,
  }}>
          <div style={styles.homeDiv}>
            <div style={styles.tag}>
              <h1>Komandamızla tanış olun! </h1>
            </div>
            <div style={styles.prgTeams}>
              <p>
              Resant bizim gücümüz təcrübəli tikinti komandamızın təcrübəsində və fədakarlığındadır. Mükəmməllik yaratmaq həvəsi olan təcrübəli peşəkarlardan ibarət komandamız uğurumuzun əsasını təşkil edir. Biz hər bir üzvün hər bir layihənin uğuruna töhfə vermək üçün unikal bacarıqlar dəsti gətirdiyi əməkdaşlıq və innovativ iş mühitini inkişaf etdirməkdən qürur duyuruq.

                <br />
                <br />
             Tikinti komandamızın başında tikinti sənayesində zəngin təcrübəyə malik təcrübəli liderlər qrupu dayanır. Onların strateji baxışı, praktiki təcrübə ilə birləşərək, layihələrimizi başlanğıcdan tamamlanana qədər istiqamətləndirir.

              </p>
            </div>
          </div>
        </div>
        <div style={styles.abCon}>
          {about.map((item, index) =>
            (index + 1) % 2 !== 0 ? (
              <div style={styles.abDiv}>
                <div style={styles.abPDivs}>
                  <div>
                    <span style={styles.ustunSpan}>{item.title}</span><br/>
                    <span style={{fontSize:"16px",color:"#358A9F"}}>{item.profession}</span>
                    <p style={styles.pTag}>{item.content}</p>
                  </div>
                  <div style={{ marginRight: "100%" }}>
                    <hr className="solid" style={styles.hr} />
                  </div>
                </div>
                <div>
                  <img src={item.image} style={{ width: "600px" }} />
                </div>
              </div>
            ) : (
              <div style={styles.abDiv}>
                <div>
                  <img src={item.image} style={{ width: "600px" }} />
                </div>

                <div style={styles.abPDivs}>
                  <div>
                    <span style={styles.ustunSpan}>{item.title}</span><br/>
                    <span>{item.profession}</span>
                    <p style={styles.pTag}>{item.content}</p>
                  </div>
                  <div style={{ marginRight: "100%" }}>
                    <hr className="solid" style={styles.hr} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <Footer />
      </div>
    </PageContainer>
  );
};

export default Teams;
