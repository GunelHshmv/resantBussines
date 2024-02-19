import React, { useState } from 'react';
import PageContainer from '../../PageContainer';
import styles from '../../Styles';
import Footer from '../../Footer';
const Projects = () => {
    const [project,setProject]=useState([
        {title:"Binəqədi Park binası",listed:["Yeraltı dayanacaq","Ticarət mərkəzi","Uşaq bağçası","Spa","Aptek","Fitnes mərkəzi","Kulinariya","Kafe","Açıq havada hovuz","Məktəb"],content:"'Binagadi Park Residence' layihəsi Binəqədi rayonu, Mədən 1 ünvanında inşa edilməkdədir. 8 hektarlıq ərazidə 5 bina 27 blok 2400 mənzildən ibarət inanılmaz infrastruktura malik müasir standartlara tam cavab verən yüksək keyfiyyətli yaşayış kompleksidir. Ümumi sahəsi 38755 m² olan  qaraj genişliyi və rahatlığı ilə tam siz istəyəndir. Yaşayış kompleksimizdə sakinlərimizə yalnız mənzil deyil istirahət, idman, alış-veriş və bir çox üstünlükləri olan həyat təqdim edirik.",image:"image/Rectangle 1.png"},
        {title:"Abşeron Park",content:"Şəhərin mərkəzi küçələrindən biri olan Dilarə Əliyevada, 28 May m/s- nın yaxınlığında Baku Galaxy Park yaşayış kompleksi sizə faizsiz kredit və ya daxili ipoteka şərtləriylə ev sahibi olmağı təklif edir. 28 May metrostansiyasına 5 dəqiqəlik məsafədə yerləşən, qüsursuz infrastruktura malik bu layihəmiz ümumilikdə 9 nəhəng binadan ibarətdir. Bütün binaları birləşdirən, yaşıllıqlarla dolu qapalı həyətin böyüklüyü isə 4 ha-dır! Bütün bunlarla yanaşı mənzil sayına uyğun geniş yeraltı avtodayanacaq və 7/24 mühafizə sistemi də bu özəl layihəmizdə mövcuddur. Mənzilləri istər FAİZSİZ kredit, istərsə də ipoteka şərtlərilə rahatlıqla əldə edə bilərsiniz.",image:"image/rg2.png"}
    ])
    return <PageContainer>
        <div style={styles.container}>
      <div style={{...styles.bgImageStyleHome,backgroundImage: `url(${process.env.PUBLIC_URL}/image/layi1.png)`,}}>
        <div style={styles.homeDiv}>
          <div style={styles.tag}>
            <h1>Layihələrimiz</h1>
          </div>
          <div style={styles.prgTeams}>
            <p>
            Layihə öncəsi işlər tikinti layihəsinin məcburi hissəsidir. Təcrübə göstərir ki, əksər hallarda layihə sənədlərinin razılaşdırılmasından imtina, podratçıların obyekt haqqında bütün məlumatları toplamaması ilə əlaqədardır. Nəticədə məlum olur ki, layihə standartların pozulması ilə tərtib edilib. Layihədən əvvəl hazırlıq bu cür problemlərin qarşısını almağa imkan verir ki, bu da vaxta və pula qənaət deməkdir.<br/><br/>
            Biz hər zaman insanların rahat seçimi və düzgün seçimi üçün iş görək. bu səbəbdən də Resant tikinti şirkətində layihələndirmə işləri tam dəqiq və güvnilir aparılır. Xüsusi mütəxəssislər tərəfindən hazırlanan layihələr hər zaman müştərilər tərəfindən bəyənilən layihələr olur.
            </p>
          </div>
        </div>
      </div>
      <div style={{marginTop:"80px"}} >
      {
        project.map((item)=>(
            <div style={styles.projectsDiv} >
                <div><img src={item.image} style={{width:"950px"}} /></div>
               <div style={{...styles.projectsDiv,width:"950px"}}>
               <div style={{...styles.ustunSpan,width:"100%"}}>{item.title}</div><br/>
                <span style={styles.prSpan}>{item.content}</span>
               </div>
                {item.listed?
                   <ul style={styles.ul}> 
                   {item.listed.map((item)=>(
                        <li>{item}</li>
                    ))}</ul>:null
                }
            </div>
        ))
      }
      </div>
      <Footer />
    </div>
    </PageContainer>;
}

export default Projects;