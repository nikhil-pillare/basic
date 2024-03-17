


export const Nam = (props) => {
    const { A, B, side = "",srcc,bor, ...divProps } = props;
  
    return (
      <div
        {...divProps}
        className={`hex `}
        style={{
          //border: "1px solid #000",
          boxSizing: "border-box",
          height: "200px",
          width: "200px",
          ...props.style,
          position: "relative",
          borderRadius: "100%",
         
        
  
        }}
      >
        <div  style={{
          //border: "1px solid #000",
          // boxSizing: "border-box",
        //   height: "235px",
        //   width: "235px",
        //   // ...props.style,
          position: "relative",
        //   borderRadius: "80%",
         zIndex:"1",
        //  left:"8px",
        //  top:"8px"
        //  , overflow:"hidden",
         display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"
        }}>

       <div style={{width:"300px",  marginTop:"20px"}}>
       <p style={{color:"#131313", fontSize:"20px"}}>Hello!! I am </p>
        <h1 id="user-detail-name" style={{color:"#131313", fontSize:"43px"}}>Nikhil Pillare</h1>
        <h2 style={{color:"#131313"}}>Software Developer</h2>

        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"90%",margin:"auto"}}>

        <img id="contact-linkedin" onClick={() => window.open('https://www.linkedin.com/in/nikhil-pillare-56b1a9208/', '_blank')}
  style={{ width: '16%', borderRadius: '10px', transition: 'opacity 0.3s' , cursor:"pointer"}}
  src="linkedinlogo.png"
  alt="linkedin"
  onMouseOver={(event) => (event.target.style.opacity = '0.8')}
  onMouseOut={(event) => (event.target.style.opacity = '1')}
/>

          <img id="contact-github"  style={{width:"16%"
          
          ,borderRadius:"10px", transition: 'opacity 0.3s', cursor:"pointer"}}  src="githublogo.png" alt="github"
          onMouseOver={(event) => (event.target.style.opacity = '0.8')}
          onMouseOut={(event) => (event.target.style.opacity = '1')}
          />
          <img onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nikhilpillare98@gmail.com', '_blank')} style={{width:"16%", borderRadius:"10px", transition: 'opacity 0.3s', cursor:"pointer"}}  src="maillogo.png" alt="mail"
          onMouseOver={(event) => (event.target.style.opacity = '0.8')}
          onMouseOut={(event) => (event.target.style.opacity = '1')}
          />
          <img   onClick={() => { window.location.href = 'tel:+91-9766155637';
  }}  style={{width:"16%", borderRadius:"10px", transition: 'opacity 0.3s', cursor:"pointer"}}  src="calllogo.png" alt="phone"
          onMouseOver={(event) => (event.target.style.opacity = '0.8')}
          onMouseOut={(event) => (event.target.style.opacity = '1')}
          />
        </div>

       </div>
       
        </div>
       
        {/* <div
          style={{
            borderTop: "1px solid #000",
            borderBottom: "1px solid #001",
            boxSizing: "border-box",
            width: 200 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: "rotate(90deg)"
          }}
          
        /> */}
        <div  style={{
            // borderTop: "1px solid black",
            // borderBottom: "1px solid #001",
            boxSizing: "border-box",
            width:`${side}`,
            // width: 250 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: "rotate(90deg)",
            backgroundColor:`${bor}`
            
          }}>
          
        </div>
        <div
          style={{
            // borderTop: "1px solid #000",
            // borderBottom: "1px solid #000",
            boxSizing: "border-box",
            width:`${side}`,
            // width: 250 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            transform: "rotate(150deg)",
            transformOrigin: "center center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor:`${bor}`
          }}
        />
        <div
          style={{
            // borderTop: "1px solid red",
            // borderBottom: "1px solid #000",
            boxSizing: "border-box",
            width:`${side}`,
            // width: 250 / Math.sqrt(3) + "px",
            height: "100%",
            margin: "0 auto",
            transform: "rotate(210deg)",
            transformOrigin: "center center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            backgroundColor:`${bor}`
          }}
        />
        
      </div>
    );
  };