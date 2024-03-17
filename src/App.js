import React from "react";
import "./styles.css";
// import NavigationBar from "./components/Nav";
import Navigation from "./components/Nav";
import { Hex } from "./components/Hex";
import { Pro } from "./components/Pro";
import Appp from "./pages/Appp";
import Tool from "./pages/Tool";
import Project from "./pages/projects";
import Stats from "./pages/stats";
import { MegaHex } from "./components/MegaHex";
import { useInView } from "react-intersection-observer";

import Contact from "./components/contact";

import Foot from "./components/foot";
const sin60 = 2 / Math.sqrt(3);
const r = 200;
export default function App() {

  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.45,
  });

  return (
    <div  className="App"  >

      <Navigation/>
      <br/>
      <Appp/>
      <Tool/>
      <Project/>
      <Stats/>
      <Contact/>
      
      <Foot/>
    </div>
   
    // <div className="App" style={{ width: "100%", marginTop: "0px",height:"480px" , border:"2px solid black", paddingLeft:"0px"}}>
      
    //   <div >
       
    //   <Pro  side={300}
    //               style={{ height: `${250}px`, width: `${250}px`,
    //                marginRight:"px",
    //                marginLeft:"100px" }}/>
    //         <div
    //           style={{
    //             marginTop: "-20px",
    //             display: "flex",
    //             marginLeft:"-120px",
    //             justifyContent: "center"
    //           }}
    //         >
             
    //             <Hex
    //               side={100}
    //               style={{ height: `${r}px`, width: `${r}px`, marginRight:"18px" }}
    //               srcc={`https://media.cntraveler.com/photos/5ea9df878abbf81d02aeae0b/1:1/w_4016,h_4016,c_limit/Kawachi-Fuji-Garden-wisteria-GettyImages-684691336.jpg`}
                  
    //             />
                
    //            <Hex
    //               side={100}
    //               style={{ height: `${r}px`, width: `${r}px`, marginRight:"18px" }}
                  
    //             />
    //              <Hex
    //               side={100}
    //               style={{ height: `${r}px`, width: `${r}px`, marginRight:"18px" }}
    //               bor={"black"}
    //             />
    //         </div>

    //       <div   style={{
    //             marginTop: "-10px",
    //             display: "flex",
    //             marginLeft:"-120px",
    //             justifyContent: "center"
    //           }}>
    //       <Hex
    //               side={100}
    //               style={{ height: `${r}px`, width: `${r}px`, marginRight:"18px" }}
                  
    //             />




    //           <Hex  style={{ height: `${r}px`, width: `${r}px`, marginRight:"18px"}}
                
    //           >
                
                  
                
               
    //           </Hex>
             
    //       </div>
        
    //   </div>

      
    // </div>
  );
}


