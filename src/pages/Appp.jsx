import React from "react";
// import "./styles.css";
// import NavigationBar from "./components/Nav";
// import { Hex } from "./components/Hex";
// import { Pro } from "./components/Pro";
import "../styles.css";
import { Button } from "@chakra-ui/react";
import { Hex } from "../components/Hex";
import { Pro } from "../components/Pro";
import { Nam } from "../components/Nam";
import { MiniHex } from "../components/MiniHex";

import "../components/css/home.css"
const sin60 = 330 / Math.sqrt(3);
const r = 200;
export default function Appp() {

   return (

      <div  style={{ width: "100%", marginTop: "70px", paddingLeft: "0px" }}>

         <div id="home"  style={{ width: "1000px", margin: "auto", zoom: "1.25",}}>
            {/* <Pro        side={sin60+"px"}
                  style={{ height: `${330}px`, width: `${330}px`,
                   top:"20px",
                   marginLeft:"-105px",
                  left:"550px",
                  

                  }}
                  bor={"#A3C8B9"}
                  
                   /> */}
               <div id="name">
               <Nam side={sin60 + "px"}
               id="name"
               style={{
                  height: `${330}px`, margin: "auto", width: `${330}px`,
                  top: "20px",



               }}
               bor={"#A3C8B9"} />
               </div>
            
               <div id="profile">
               <Pro  side={"144px"}
               style={{
                  height: `${250}px`, marginLeft: "54%", width: `${250}px`,

               }}
               //  srcc={`profileportfolioo.png`}
               bor={"#A3C8B9"}
               
            />
               </div>
          
            <div
                id="about"
                
                className="about section"
              
               >
               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#A3C8B9"}
               >
                  <p style={{ marginTop: "70px", fontWeight: "bolder" }}>1200+ Hours

                     Full Stack Coding</p>
               </Hex>


               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#A3C8B9"}
               >
                  <p style={{ border: "none", borderRadius: "0px", padding: "0px", color: "#131313", padding: "4px", fontWeight: "bolder" }}>
                     <h5 style={{ padding: "0px", margin: "0px", fontSize: "20px", marginTop: "50px", marginLeft: "3px", marginRight: "3px", marginBottom: "7px", color: "#131313" }}></h5>
                     I have built 4 Team and 3 Individual projects.

                  </p>

               </Hex>


               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  

                  bor={"#A3C8B9"}
               >

                  <p  id="user-detail-intro" style={{ border: "none", borderRadius: "0px", padding: "3px", color: "#131313", padding: "2px", fontWeight: "bolder", fontSize:"13.4px", }}>
                     <h5  style={{ padding: "0px", margin: "0px", fontSize: "20px", marginLeft: "3px", marginRight: "3px", marginBottom: "10px", color: "#131313", marginTop:"-7px" }}>About Me</h5>
                     I'm passionate about crafting user-friendly web applications. Eager to learn and contribute my skills to create innovative solutions that leave a positive impact, core knowledge of HTML, CSS, JavaScript and MERN stack.

                  </p>

               </Hex>
            </div>

            <div
               id="dsaprob"
               
            >
               <Hex
                  side={100}
                  style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#A3C8B9"}
               >

                  <p style={{ marginTop: "80px", fontWeight: "bolder" }}>550+ DSA Problems</p>
               </Hex>




               <Hex style={{ height: `${r}px`, width: `${r}px`, marginRight: "18px" }}
                  bor={"#A3C8B9"}
               >

               <p style={{ marginTop: "80px", fontWeight: "bolder" }}>Software Developer at <strong>Avatu Pvt Ltd.</strong></p>


               </Hex>

            </div>


         </div>










         <div id="techhex" style={{ width: "88%", display: "flex", justifyContent: "center", paddingTop: "140px", margin: "auto", zoom: "0.75" }}>


            <Hex style={{ height: `${r}px`, width: `${r}px` }}
               bor={"#A3C8B9"}
            >


               <h1  style={{ marginTop: "70px" }}>TechStacks</h1>

            </Hex>

         </div>

         <div id="techstack" class="skills-card" >
            <div style={{ width: "93%", display: "flex", justifyContent: "space-evenly", margin: "auto", marginTop: "0px",  }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "85px" }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>

               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "85px" }}
                  bor={"#A3C8B9"}
               >

                  <h2 style={{ marginTop: "50px" }}>FrontEnd</h2>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "85px" }}
                  bor={"#A3C8B9"}
               >


                  <h2 style={{ marginTop: "50px" }}>BackEnd</h2>

               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "85px" }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>

            </div>




            <div style={{ width: "75%", display: "flex", justifyContent: "space-between", marginTop: "-1%", marginLeft: "12.5%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="csslogo.png" alt="" />

                  <h3 style={{ marginTop: "0px" }}>CSS</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "10.8%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="htmllogo.png" alt="" />

                  <h3 style={{ marginTop: "0px" }}>HTML</h3>
               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "10.8%" }}
                  bor={"#A3C8B9"}


               >
                  <img style={{ width: "65%", marginTop: "10%", marginLeft: "-0%" }} src="dsalogo.png" alt="" />

                  <h3 style={{ marginTop: "0px" }}>DSA</h3>

               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "60%", marginTop: "9%", marginLeft: "-5%" }} src="firebaselogo.png" alt="" />

                  <h3 style={{ marginTop: "0px" }}>Firebase</h3>


               </MiniHex>

            </div>
            <div style={{ width: "89.9%", display: "flex", justifyContent: "space-between", marginTop: "-0.8%", marginLeft: "5.1%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >
                  <img style={{ width: "55%", marginTop: "12%", marginLeft: "-5%" }} src="jslogo.png" alt="" />

                  <h3 style={{ marginTop: "0px" }}>Javascript</h3>



               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "168px" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="reactlogo.png" alt="" />

                  <h3 style={{ marginTop: "0px" }}>React</h3>


               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex>
              <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "168px" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-0%" }} src="nodejslogo.png" alt="" />

                  <h3 style={{ marginTop: "-5px" }}>Node Js</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="herokulogo.png" alt="" />

                  <h3 style={{ marginTop: "-5px" }}>Heroku</h3>


               </MiniHex>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginLeft: "-2.5%", marginTop: "-0.8%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-0%" }} src="reduxlogo.png" alt="" />

                  <h3 style={{ marginTop: "-5px" }}>Redux</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "0.5%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="tslogo.png" alt="" />

                  <h3 style={{ marginTop: "-7px" }}>Typescript</h3>


               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "1.4%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="mongologo.png" alt="" />

                  <h3 style={{ marginTop: "-7px" }}>Mongo DB</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "-5%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="express.png" alt="" />

                  <h3 style={{ marginTop: "-7px" }}>Express</h3>


               </MiniHex>

            </div>
            <div style={{ width: "92%", display: "flex", justifyContent: "space-evenly", marginLeft: "4%", marginTop: "-0.8%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "17%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "65%", marginTop: "9%", marginLeft: "-5%" }} src="chakralogo.png" alt="" />

                  <h3 style={{ marginTop: "-5px" }}>Chakra UI</h3>


               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex>
              <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "17%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "75%", marginTop: "1%", marginLeft: "-5%" }} src="mongoose1.png" alt="" />

                  <h3 style={{ marginTop: "-15px" }}>Mongoose</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>
            </div>
            <div style={{ width: "75%", display: "flex", justifyContent: "space-between", marginTop: "-0.8%", marginLeft: "12.5%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "90px" }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "90px" }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>

            </div>
            <div style={{ width: "90%", display: "flex", justifyContent: "space-between", marginTop: "-0.8%", marginLeft: "5%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,marginRight:"185px"}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex>
              <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,marginLeft:"185px"}}
                 bor={"#A3C8B9"}
              >
                
                  
                
               
              </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >




               </MiniHex>
            </div>

         </div>


      </div>
   );
}