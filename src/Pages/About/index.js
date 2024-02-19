import React, { useState } from "react";
import PageContainer from "../../PageContainer";
import styles from "../../Styles";
import Footer from "../../Footer";

const About = () => {
  const [about, setAbout] = useState([
    {
      title: "Görüşlərimiz",
      content:
        "Biz təkcə sənaye standartlarına cavab verən deyil, həm də onları aşan tikinti həllərini təqdim etməyə inanırıq. Keyfiyyətli sənətkarlığa sadiqliyimiz işimizin hər bir detalında aydın görünür.Vizyonunuz bizim prioritetimizdir. Biz müştərilərimizlə onların məqsədlərini başa düşmək üçün yaxından işləyirik, hər bir layihənin onların istək və tələblərini əks etdirməsini təmin edirik.",
      image: "image/px1.png",
    },
    {
      title: "Yanaşmamız",
      content:
        "Ən qabaqcıl texnologiyalar və tikinti metodologiyalarını əhatə edərək, biz daim yeniliklərə can atırıq. Bu, bizə sənaye tendensiyalarını qabaqlamağa və təkcə funksional deyil, həm də gələcəyə davamlı layihələr təqdim etməyə imkan verir. Komandamızın və tərəfdaşlarımızın rifahı hər şeydən önəmlidir.",
      image: "image/px2.png",
    },
    {
      title: "Prosesimiz",
      content:
        "Vizyonları reallığa çevirərək, biz məhsuldarlığı ilhamlandıran və qalıcı təəssürat buraxan ticarət məkanlarının yaradılmasında ixtisaslaşırıq. Fərdi həyat tərzini əks etdirən evlər hazırlayaraq, düşünülmüş dizayn və qüsursuz tikinti vasitəsilə arzuları həyata keçiririk. İstər mövcud məkanları canlandırmaq, istərsə də köhnə tikililərə yeni həyat gətirmək olsun, bizim təmir və yenidənqurma xidmətlərimiz hər bir layihəyə təzə nəfəs gətirir.",
      image: "image/px3.png",
    },
  ]);
  return (
    <PageContainer>
      <div style={styles.container}>
        <div style={{...styles.bgImageStyleHome,
    backgroundImage: `url(${process.env.PUBLIC_URL}/image/pexels-arthouse-studio-4348331%201.png)`,
  }}>
          <div style={styles.homeDiv}>
            <div style={styles.tag}>
              <h1>Şirkət haqqında</h1>
            </div>
            <div style={styles.prgAb}>
              <p>
                Mükəmməlliyin tikinti dünyasında innovasiyalarla qovuşduğu
                Resanta xoş gəlmisiniz. Yüksək keyfiyyətli layihələrin təqdim
                edilməsinin zəngin tarixi və müştərilərin gözləntilərini aşmaq
                öhdəliyi ilə biz tikinti sənayesində aparıcı qüvvə olmaqdan
                qürur duyuruq.
                <br />
                <br />
                Resant-da biz başa düşürük ki, hər bir struktur unikal hekayə
                danışır və biz özümüzü zamanın sınağına tab gətirən davamlı
                məkanlar yaratmağa həsr edirik. Konsepsiyadan sona qədər
                təcrübəli peşəkarlardan ibarət komandamız həyata keçirdiyimiz
                hər bir layihəyə təcrübə, yaradıcılıq və sarsılmaz sədaqət
                qarışığı gətirir.
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
                    <span style={styles.ustunSpan}>{item.title}</span>
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
                    <span style={styles.ustunSpan}>{item.title}</span>
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

export default About;
