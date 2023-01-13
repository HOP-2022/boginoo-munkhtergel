import React, {useState, useRef, useDebugValue} from "react";
import { Header } from "./pages/Header";
import logo from "./yms/logo.png";
import {List} from "./pages/mm";
import {Footer} from "./pages/Footer";

export const App = () => {

  const styles = {
    container: {
      height: "100vh",
      width: "100vw",
    },
    body: {
      height: "80vh",
      width: "100vw",
      display: "flex",
      justifyContent:'center',
      alignItems:"center",
      flexDirection: "column",
    },
    button: {
      width: "192px",
      height: "44px",
      background: "#02B589",
      borderRadius: "100px",
      color: "white",
    },
    input: {
      width: "581px",
      height: " 44px",
      background: "#FFFFFF",
      border: "1px solid #F0F0F0",
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: "100px",
      marginRight: "3vw",
      fontSize:'1.8h'
    },
    middle: {
      display: "flex",
      flexDirection: "row",
    },
    logo: {
      marginBottom: "10vh",
    },
    textBox:{
      display:'flex',
      flexDirection:'column',
      height:'40vh',
      width:'41vw',
      marginTop:'10vh'
    }
  };
  const [text, setText] = useState('');
  const [link, setLink] = useState();
  // const[change, setChange] = useState('');
  const save = () => {
    setLink (text)
  }
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.body}>
        <img style={styles.logo} src={logo} />
        <div style={styles.middle}>
          <input placeholder="https://www.web-huudas.mn" style={styles.input} onChange={(e) => setText(e.target.value)}/>
          <button  style={styles.button} onClick={save}>Богиносгох</button>
        </div>
        <div style={styles.textBox}>
          {link && <List text={link}/>}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

