import Work from "../components/Work";
import "../components/css/home.css";
import ProjectDet from "../components/ProjectDet";
const images1 = ['project/edu3.png', 'project/edu1.png', 'project/edu2.png', 'project/edu4.png', 'project/edu5.png']
const images2 = ['project/afrah3.png', 'project/afrah1.png', 'project/afrah2.png', 'project/afrah4.png', 'project/afrah5.png']
const images3 = ['project/indu1.png', 'project/indu2.png', 'project/indu3.png', 'project/indu4.png', 'project/indu5.png']
const images4 = ['project/wave1.png', 'project/wave2.png', 'project/wave3.png', 'project/wave4.png', 'project/wave5.png']
const images5 = ['project/gul1.png', 'project/gul2.png', 'project/gul3.png', 'project/gul4.png', 'project/gul5.png']
const images6 = ['project/sare1.png', 'project/sare2.png', 'project/sare3.png', 'project/sare4.png']
function Project() {
    return (
        <div id="projects"  style={{ marginTop: "200px" }}>
    <h1 style={{margin:"auto", color:"#131313",padding:"10px"}}>PROJECTS</h1>
            <div className="project-card"  style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", width: "90%", marginTop: "80px" }} >
                <Work images={images1} />
                <ProjectDet
                    title={"EduEra"}
                    des={"EduEra, The website that give you information about universities and their programs in abroad."}
                    Code={"Code"}
                    Live={"Live"}
                    tech1={"Typescript"}
                    tech2={"React"}
                    tech3={"Vercel"}
                    tech4={"Chakra UI"}
                    deployed={`https://eduera.vercel.app/`}
                    codebase={`https://github.com/nikhil-pillare/flowing-basketball-1538`}
                >
                      
                </ProjectDet>
            </div>
            <div className="project-card"  style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", width: "90%", marginTop: "80px" }}>
                <Work images={images2} />
                <ProjectDet
                    title={"Afrah"}
                    des={"It is a clone of asos.com, An e-commerce website primarily focuses on men and women fashion"}
                    Code={"Code"}
                    Live={"Live"}
                    tech1={"Javascript"}
                    tech2={"CSS"}
                    tech3={"HTML"}
                    tech4={"Netlify"}
                    
                    deployed={`https://storied-douhua-335653.netlify.app/`}
                    codebase={`https://github.com/nikhil-pillare/Afrah`}
                >
                     {/* <a className="project-deployed-link"  href="https://startling-mermaid-fc7ad8.netlify.app/"></a>
                    <a className="project-github-link"  href="https://github.com/nikhil-pillare/groovy-airplane-6414"></a> */}
                </ProjectDet>
            </div>

            <div className="project-card"  style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", width: "90%", marginTop: "80px" }}>
                <Work images={images3} />
                <ProjectDet
                    title={"IndusTech"}
                    des={"IndusTech is an E-commerce website that specializes in selling gadgets and mechanical industrial machines and parts"}
                    Code={"Code"}
                    Live={"Live"}
                    tech1={"Javascript"}
                    tech2={"CSS"}
                    tech3={"HTML"}
                    tech4={"Netlify"}
                    deployed={`https://industech-mech.netlify.app/`}
                    codebase={`https://github.com/nikhil-pillare/Industry-Buying-Clone`}
                >
                     {/* <a className="project-deployed-link"  href="https://startling-mermaid-fc7ad8.netlify.app/"></a>
                    <a className="project-github-link"  href="https://github.com/nikhil-pillare/groovy-airplane-6414"></a> */}
                </ProjectDet>
            </div>

            <div className="project-card"  style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", width: "90%", marginTop: "80px" }}>
                <Work images={images4} />
                <ProjectDet
                    title={"Soundwave"}
                    des={"SoundWave is an e-commerce platform for selling audio devices."}
                    Code={"Code"}
                    Live={"Live"}
                    tech1={"Typescript"}
                    tech2={"React"}
                    tech3={"Redux"}
                    tech4={"Chakra UI"}
                    deployed={`https://startling-mermaid-fc7ad8.netlify.app/`}
                    codebase={`https://github.com/nikhil-pillare/nippy-flavor-9468`}
                >

                    {/* <a className="project-deployed-link"  href="https://startling-mermaid-fc7ad8.netlify.app/"></a>
                    <a className="project-github-link"  href="https://github.com/nikhil-pillare/groovy-airplane-6414"></a> */}
                </ProjectDet>
            </div>

            <div className="project-card"  style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", width: "90%", marginTop: "80px" }}>
                <Work images={images5} />
                <ProjectDet

                    title={"Gulmohar"}
                    des={"The Gulmohar is a E-commerce website of flowers and gift delivery. It includes various categories and brands according to the needs of customers."}
                    Code={"Code"}
                    Live={"Live"}
                    tech1={"Javascript"}
                    tech2={"CSS"}
                    tech3={"HTML"}
                    tech4={"Netlify"}
                    deployed={`https://kaleidoscopic-axolotl-77aca0.netlify.app/`}
                    codebase={`https://github.com/nikhil-pillare/groovy-airplane-6414`}
                >
                    {/* <a className="project-deployed-link"  href="https://kaleidoscopic-axolotl-77aca0.netlify.app/"></a>
                    <a className="project-github-link"  href="https://github.com/nikhil-pillare/groovy-airplane-6414"></a> */}
                </ProjectDet>
            </div>
            <div className="project-card"  style={{ display: "flex", margin: "auto", justifyContent: "space-evenly", width: "90%", marginTop: "80px" }}>
                <Work images={images6} />
                <ProjectDet

                    title={"SA RE GA MA"}
                    des={`SA RE GA MA project aims to replicate Spotify's music streaming service with playlists, recommendations, and user personalization. *Created HomePage`}
                    Code={"Code"}
                    Live={"Live"}
                    tech1={"Chakra UI"}
                    tech2={"React"}
                    tech3={"NodeJs"}
                    tech4={"Express"}
                    deployed={`https://frontend-hla4711e7-hemant142.vercel.app/`}
                    codebase={`https://github.com/nikhil-pillare/honest-wing-5796`}
                >
                    {/* <a className="project-deployed-link"  href="https://kaleidoscopic-axolotl-77aca0.netlify.app/"></a>
                    <a className="project-github-link"  href="https://github.com/nikhil-pillare/groovy-airplane-6414"></a> */}
                </ProjectDet>
            </div>

        </div>
    )
}

export default Project