import React, { useState } from "react";
import PageContainer from "../../PageContainer";
import styles from "../../Styles";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import { Avatar, Button } from "@mui/material";
const Contacts = () => {
    const [forms, setForms] = useState([]);
    const [newForms, setnewForms] = useState([]);

console.log(Array.isArray(forms));
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(forms)
        const newFormData = {
            names: forms.names,
            email: forms.email,
            messages: forms.messages
        };
        setnewForms(prevForms => [...prevForms, newFormData]);
        setForms({ names: "", email: "", messages: "" }); 
    };
    
    
      
  return (
    <PageContainer>
      <div style={styles.container}>
        <div
          style={{
            ...styles.bgImageStyleHome,
            backgroundImage: `url(${process.env.PUBLIC_URL}/image/con1.png)`,
          }}
        >
          <div style={styles.homeDiv}>
            <div style={styles.tag}>
              <h1>Əlaqə məlumatları</h1>
            </div>
            <div style={styles.prgTeams}>
              <p>
                Resant qabaqcıl və keyfiyyətli iş gördüyünə görə bu şirkətlə iş
                görmək hər bir insan üçün xoşagələn haldır. Resant şirkəti daima
                öz müştərilərinin razılığını nəzərə alır və onların istəklərinə
                uyğun iş görməyə, layihə hazırlamağa üstünlük verir. Bizimlə
                əlaqə keçmək üçün scroll edin.
              </p>
            </div>
          </div>
        </div>
        <div style={styles.contactDiv}>
          <div style={styles.avDivs}>
            <div style={{ width: "513px" }}>
              <p style={styles.pCon}>Bizimlə əlaqə saxla</p>
            </div>
            <div style={styles.avDiv}>
              <Avatar
                style={{ width: "66px", height: "66px" }}
                alt="Remy Sharp"
                src="image/ellipse6.png"
              />
              <div style={styles.textCon}>
                <p style={{ paddingLeft: "8px" }}>
                  Salam, mənim adım Salehdir. Bizimlə əlaqə üçün ya formu
                  doldurun ya da mənə email yazın{" "}
                  <Link
                    to={"http://www.@resant.com"}
                    style={{ color: "white" }}
                  >
                    www.@resant.com
                  </Link>
                </p>{" "}
              </div>
            </div>
            <form style={styles.formS} onSubmit={handleSubmit}>
            <div style={styles.inpDiv}>
            <label style={styles.labelS}>Ad</label>
            <input
                style={styles.inpS}
                type="text"
                value={forms.names}
                onChange={(event) =>
                  setForms((prevForms) => ({
                    ...prevForms,
                    names: event.target.value
                  }))
                }
                name="names"
                placeholder="Ad"
              />

            </div>
            <div style={styles.inpDiv}>
            <label style={styles.labelS}>Email</label>
            <input
                style={styles.inpS}
                type="email"
                value={forms.email}
                onChange={(event) =>
                  setForms((prevForms) => ({
                    ...prevForms,
                    email: event.target.value
                  }))
                }
                name="email"
                placeholder="Email"
              />
            </div>
            <div style={styles.inpDiv}>
            <label style={styles.labelS}>Mesajınız</label>
            <input
                style={{ ...styles.inpS, height: "96px" }}
                type="text"
                value={forms.messages}
                onChange={(event) =>
                  setForms((prevForms) => ({
                    ...prevForms,
                    messages: event.target.value
                  }))
                }
                name="messages"
                placeholder="Mesajınız daxil edin..."
              />

            </div>
            <div>
                <Button style={styles.conBtn} type="submit">Mesajımı göndər</Button>
            </div>
          </form>



          </div>
          <div style={styles.ifDiv}>
            <iframe
              style={styles.if}
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=844%20W%20Orange%20Ave,%20South%20San%20Francisco,%20CA%2094080,%20United%20States%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>{" "}
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=cffda27559f5b5bacb6b6a4c5acbb9fb2543cd55"
            ></script>
          </div>
        </div>
        <Footer />
      </div>
    </PageContainer>
  );
};

export default Contacts;
