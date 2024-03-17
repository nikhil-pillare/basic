import React from "react";
// import "./styles.css";
// import NavigationBar from "./components/Nav";
// import { Hex } from "./components/Hex";
// import { Pro } from "./components/Pro";
import "../styles.css";

import { Hex } from "../components/Hex";
import { Pro } from "../components/Pro";
import { Nam } from "../components/Nam";
import { MiniHex } from "../components/MiniHex";

import "../components/css/home.css"
const sin60 = 330 / Math.sqrt(3);
const r = 200;
export default function Tool() {
   return (
      <div id="skills"  >
         <div style={{ width: "88%", display: "flex", justifyContent: "center", paddingTop: "140px", margin: "auto", zoom: "0.75" }} >


            <Hex style={{ height: `${r}px`, width: `${r}px` }}
               bor={"#A3C8B9"}
            >


               <h1 style={{ marginTop: "70px" }}>Skills</h1>

            </Hex>

         </div>

         <div id="skill"  >
            <div style={{ width: "93%", display: "flex", justifyContent: "space-evenly", margin: "auto", marginTop: "0px" }}>
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

                  <h2 style={{ marginTop: "50px" }}>Soft Skills</h2>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "85px" }}
                  bor={"#A3C8B9"}
               >


                  <h2 style={{ marginTop: "50px" }}>Tools</h2>

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




            <div className="skills-card" style={{ width: "75%", display: "flex", justifyContent: "space-between", marginTop: "-1%", marginLeft: "12.5%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img className="skills-card-img" style={{ width: "65%", marginTop: "6%", marginLeft: "-5%" }} src="teamwork.png" alt="" />

                  <h3 className="skills-card-name" style={{ marginTop: "0px" }}>Teamwork</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "10.8%" }}
                  bor={"#A3C8B9"}
               >

                  <img className="skills-card-img" style={{ width: "55%", marginTop: "9%", marginLeft: "-0%" }} src="selflearn.png" alt="" />

                  <h3 className="skills-card-name" style={{ marginTop: "6px" }}>Self learn</h3>
               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
        bor={"#A3C8B9"}
     >
       
         
       
      
     </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "10.8%" }}
                  bor={"#A3C8B9"}


               >
                  <img style={{ width: "65%", marginTop: "8%", marginLeft: "-5%" }} src="cli.png" alt="" />

                  <h3 className="skills-card-name" style={{ marginTop: "0px" }}>CLI Bash</h3>

               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img className="skills-card-img" style={{ width: "60%", marginTop: "9%", marginLeft: "-5%" }} src="githublogo.png" alt="" />

                  <h3 style={{ marginTop: "0px" }}>Github</h3>


               </MiniHex>

            </div>
            <div style={{ width: "89.9%", display: "flex", justifyContent: "space-between", marginTop: "-0.8%", marginLeft: "5.1%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img className="skills-card-img" style={{ width: "58%", marginTop: "6%", marginLeft: "-5%" }} src="adaptable.png" alt="" />

                  <h3 className="skills-card-name" style={{ marginTop: "3px" }}>Adaptability</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "168px" }}
                  bor={"#A3C8B9"}
               >

                  <img className="skills-card-img" style={{ width: "55%", marginTop: "9%", marginLeft: "-5%" }} src="ownership.png" alt="" />

                  <h3 className="skills-card-name" style={{ marginTop: "0px" }}>OwnerShip</h3>


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

                  <img style={{ width: "58%", marginTop: "9%", marginLeft: "-0%" }} src="cypress.png" alt="" />

                  <h3 style={{ marginTop: "3px" }}>Cypress</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "58%", marginTop: "9%", marginLeft: "-5%" }} src="netlify.png" alt="" />

                  <h3 style={{ marginTop: "3px" }}>Netlify</h3>


               </MiniHex>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginLeft: "-2.5%", marginTop: "-0.8%" }}>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "57%", marginTop: "9%", marginLeft: "-0%" }} src="creative.png" alt="" />

                  <h3 style={{ marginTop: "3px" }}>Creativity</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "0.5%" }}
                  bor={"#A3C8B9"}
               >

                  {/* <img style={{width:"65%", marginTop:"9%", marginLeft:"-5%"}} src="tslogo.png" alt="" />
       
       <h3 style={{marginTop:"-7px"}}>Typescript</h3> */}


               </MiniHex>
               {/* <MiniHex  style={{ height: `${150}px`, width: `${150}px`,}}
        bor={"#A3C8B9"}
     >
       
         
       
      
     </MiniHex> */}
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "1.4%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "55%", marginTop: "9%", marginLeft: "-5%" }} src="figma.png" alt="" />

                  <h3 style={{ marginTop: "3px" }}>Figma</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginRight: "-5%" }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "60%", marginTop: "9%", marginLeft: "-5%" }} src="canva.png" alt="" />

                  <h3 style={{ marginTop: "3px" }}>Canva</h3>


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

                  <img style={{ width: "60%", marginTop: "9%", marginLeft: "-5%" }} src="postman.png" alt="" />

                  <h3 style={{ marginTop: "3px" }}>Postman</h3>


               </MiniHex>
               <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                  bor={"#A3C8B9"}
               >

                  <img style={{ width: "60%", marginTop: "9%", marginLeft: "-5%" }} src="npm.png" alt="" />

                  <h3 style={{ marginTop: "3px" }}>NPM</h3>


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
   )
}