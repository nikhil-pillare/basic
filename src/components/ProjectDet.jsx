
import { Children } from "react"
import { Hex } from "./Hex"
import { MiniHex } from "./MiniHex"
import "../components/css/home.css"
function ProjectDet({title,des,tech1, tech2, tech3, tech4, deployed, codebase}){
     
     return (
        <div id="pronav" >
        <div >
         <Hex   side={100}
                  style={{ height: `${200}px`, width: `${200}px`, zoom:"1.25", marginTop:"80px"}}
                  bor={"#A3C8B9"}>

                   <div style={{fontSize:"13px", textAlign:"center", marginTop:"0px", padding:"10px", fontWeight:"bold"}}>
                    <h1 class="project-title">{title}</h1>
                    <p class="project-description">{des} </p>
                    </div>
                  </Hex>
                  <a className="project-github-link"  href="https://github.com/nikhil-pillare/groovy-airplane-6414"></a>
                  <a className="project-deployed-link"  href="https://startling-mermaid-fc7ad8.netlify.app/"></a>
                    
        </div>
        <div id="temp" >
            <div style={{ display:"flex"}}>
            <  MiniHex class="project-tech-stack" style={{ height: `${150}px`, width: `${150}px`,zoom:"0.75"}}
                 bor={"#A3C8B9"}>
                   <div >

                     <div style={{display:"flex", width:"95%", margin:"auto", marginTop:"32px"}}>
                     <div style={{ border:"none",width:"58%", height:"20px", color:"#A3C8B9", padding:"3px", margin:"auto", backgroundColor:"black", borderRadius:"20px"}}>{tech1}</div>
                     <div style={{border:"none", width:"38%", height:"20px", color:"#A3C8B9", padding:"3px", margin:"auto", backgroundColor:"black", borderRadius:"20px"}}>{tech2}</div>
                     </div>
                    

                    <div style={{border:"none",display:"flex",width:"95%", margin:"auto", marginTop:"20px"}}>
                    <div style={{ width:"38%", height:"20px", color:"#A3C8B9", padding:"3px", margin:"auto", backgroundColor:"black", borderRadius:"20px"}}>{tech3}</div>
                     <div style={{border:"none", width:"58%", height:"20px", color:"#A3C8B9", padding:"3px", margin:"auto", backgroundColor:"black", borderRadius:"20px"}}>{tech4}</div>
                    </div>
                     
                   </div>

                    </MiniHex> 

                <MiniHex style={{ height: `${150}px`, width: `${150}px`,zoom:"0.75",marginLeft:"20px" , cursor:"pointer"}} 
                 bor={"#A3C8B9"} onClick={()=> window.open(deployed)}>
                      <div >
                      <img style={{width:"70px",marginBottom:"0px", marginTop:"35px" }} src="live.png" alt="" />
                      </div>
                     
                    </MiniHex> 
            </div>
               


                <MiniHex  style={{ height: `${150}px`, width: `${150}px`,zoom:"0.75", marginLeft:"85px", marginTop:"-3px", cursor:"pointer"}} 
                 bor={"#A3C8B9"} onClick={()=> window.open(codebase)} >
                     <div >
                     <img style={{width:"70px",marginBottom:"0px", marginTop:"10px" }} src="githublogo.png" alt="" />
                      <h2 style={{marginTop:"0px"}}>code</h2>
                      </div>
                    </MiniHex> 
        </div>
        </div>
       
     )
}

export default ProjectDet