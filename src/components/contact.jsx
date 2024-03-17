import React, { useContext } from 'react'
// import style from '../style/contact.module.css'
// import { AppTheme } from '../ThemeProvider/theme'
// import emailPhoto from '../media/icons/emailI.png'
// import linkdinIcon from '../media/icons/linkedin.svg'
// import gitIcon from '../media/icons/github.svg'
import "../components/css/home.css"
import { MiniHex } from './MiniHex'

export default function Contact() {
    


    return (
        <section id='contact' style={{marginTop:"150px"}}>
            <h1>
                <p style={{fontSize:"40px",color:"#131313"}}>Contact Me</p>
            </h1>
            <div>
                <div >
                    <img src={""} alt="" />
                </div>

                

                    <div id='contacted' >


                      


                          <div >
                             
                             
                             
                             
                              <div style={{display:"flex", justifyContent:"space-around", width:"100%"}} >
                                    <div style={{width:"45%", height:"55px",padding:"5px",fontSize:"22px", borderRadius:"6px",marginTop:"30px", backgroundColor:"#131313", color:"#A3C8B9",fontWeight:"bold",border:"2px solid #A3C8B9",cursor:"pointer"}}>
                                    <p style={{marginTop:"10px"}} id="contact-phone"><b>&#128382;</b><span></span> +91 9766155637</p>
                                    </div>
                                    <div style={{width:"45%", height:"55px",padding:"5px",fontSize:"22px", borderRadius:"6px",marginTop:"30px", backgroundColor:"#131313", color:"#A3C8B9",fontWeight:"bold",border:"2px solid #A3C8B9",cursor:"pointer"}}>
                                    <p style={{marginTop:"10px"}} id="contact-email">&#x2709; nikhilpillare98@gmail.com</p>
                                    </div>
                                    
                            </div>

                           

                            <div style={{display:"flex", justifyContent:"space-around", width:"100%", }} >
                                    <div style={{display:"flex", justifyContent:"space-around",width:"45%", height:"55px",padding:"5px",fontSize:"22px", borderRadius:"6px",marginTop:"30px", backgroundColor:"#A3C8B9", color:"black",fontWeight:"bold",border:"2px solid #A3C8B9",cursor:"pointer"}}  onClick={() => window.open('https://www.linkedin.com/in/nikhil-pillare-56b1a9208/', '_blank')}>

                                    <img 
                                    style={{ width: '15%', borderRadius: '10px', transition: 'opacity 0.3s' }}
                                    src="linkedinlogo.png"
                                    alt="linkedin"
                                    onMouseOver={(event) => (event.target.style.opacity = '0.8')}
                                    onMouseOut={(event) => (event.target.style.opacity = '1')}
                                    />
                                    <p style={{margin:"auto"}}>LinkedIn</p>
                                    
                                    </div>
                                    <div style={{display:"flex", justifyContent:"space-around",width:"45%", height:"55px",padding:"5px",fontSize:"22px", borderRadius:"6px",marginTop:"30px", backgroundColor:"#A3C8B9", color:"black",fontWeight:"bold",border:"2px solid #A3C8B9",cursor:"pointer"}} >
                                    <img   style={{width:"15%"
          
                                        ,borderRadius:"10px", transition: 'opacity 0.3s'}}  src="githublogo.png" alt="github"
                                        onMouseOver={(event) => (event.target.style.opacity = '0.8')}
                                        onMouseOut={(event) => (event.target.style.opacity = '1')}
                                        />
                                         <p style={{margin:"auto"}}>Github</p>
                                    </div>
                                    
                            </div>





                            <div style={{overflow:"hidden",  zoom:"0.64", flexWrap:"nowrap", height:"500px", paddingTop:"40px",}}>
                                                                <div style={{ width: "92%", display: "flex", justifyContent: "space-evenly", marginLeft: "4%", marginTop: "-0.8%" ,}}>
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
                                                    <MiniHex style={{ height: `${150}px`, width: `${150}px`, marginLeft: "17%", }}
                                                        bor={"#A3C8B9"}
                                                        
                                                    >

                                                       
                                                     <h1 style={{marginTop:"50px"}}>Leave</h1>

                                                    </MiniHex>
                                                    <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                                                        bor={"#A3C8B9"}
                                                    >

                                                        <h1 style={{marginTop:"50px"}}>Your</h1>


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


                                                        <h1 style={{marginTop:"50px"}}>Message</h1>

                                                    </MiniHex>
                                                    <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                                                        bor={"#A3C8B9"}
                                                    >



                                                        <h1 style={{marginTop:"50px"}}>Here</h1>
                                                    </MiniHex>

                                                    </div>
                                                    <div style={{ width: "90%", display: "flex", justifyContent: "space-between", marginTop: "-0.8%", marginLeft: "5%" }}>
                                                    <MiniHex style={{ height: `${150}px`, width: `${150}px`, }}
                                                        bor={"#A3C8B9"}
                                                    >


                                                        <img  style={{width:"80%", opacity:"0.2"}} src="portlogo.png" alt="" />

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

                                                        <p style={{marginTop:"35px", fontSize:"50px"}}>&#10140;</p>
                                                      

                                                    </MiniHex>
                                                    </div>
                           </div>











































                        
                            </div>
                       
                       
                       <div >
                        <h4 style={{fontSize:"28px",color:"#131313"}}>Get In Touch With Me</h4>
                       <form style={{display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}} action="https://getform.io/f/55008d41-8851-46ae-a77f-e1c70f30c943" method="POST">

                                 <div style={{display:"flex", width:"81%", justifyContent:"space-between", margin:"auto"}}>
                                   
                                    <input style={{width:"40%", height:"40px", padding:"4px",paddingLeft:"10px",fontSize:"18px", borderRadius:"6px", border:"4px solid #A3C8B9",}} type="text" name="name" placeholder='First name' required/>
                                    
                                 
                                 
                                    <input style={{width:"40%", height:"40px",padding:"4px",paddingLeft:"10px",fontSize:"18px", borderRadius:"6px",border:"4px solid #A3C8B9",}} type="text" name="name" placeholder='Last name' required/>
                                 
                                 
                                 </div>
                                
                                <input style={{display:"flex", width:"77.8%", height:"40px",padding:"5px",justifyContent:"space-between", marginTop:"30px",paddingLeft:"10px",fontSize:"18px", borderRadius:"6px",border:"4px solid #A3C8B9",}} type="email" name="email" placeholder='Enter your e-mail' required/>
                              
                                <textarea style={{display:"flex", width:"78%", marginTop:"30px", height:"80px",padding:"5px",paddingLeft:"10px",fontSize:"18px", borderRadius:"6px",border:"4px solid #A3C8B9",}} name='message'  placeholder='Enter your message' required></textarea>

                                <div style={{display:"flex",width:"82.5%", justifyContent:"space-between", margin:"auto", marginBottom:"100px"}}>

                                <button style={{width:"48%", height:"55px", padding:"5px",paddingLeft:"10px",fontSize:"25px", borderRadius:"6px", marginTop:"30px", backgroundColor:"#A3C8B9", color:"#131313", fontWeight:"bolder", cursor:"pointer", border:"none"}} type="submit">Send</button>
                                <input style={{width:"48%", height:"55px",padding:"5px",paddingLeft:"10px",fontSize:"25px", borderRadius:"6px",marginTop:"30px", backgroundColor:"#131313", color:"#A3C8B9",fontWeight:"bolder",border:"2px solid #A3C8B9",cursor:"pointer"}} type="reset" value='Clear' />
                                </div>
                                
                            </form>

                       </div>
                            
                    </div>
               
            </div>
            
        </section>
    )
}