import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import "../components/css/home.css"

function Work({images=[]}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() =>{
    const interval =setInterval(() =>{
      nextImage();
    }, 6000);

    return ()=>{
      clearInterval(interval);
    };
  }, [currentIndex]);

  const nextImage=()=>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage=()=>{
    setCurrentIndex((prevIndex)=>(prevIndex-1+images.length) % images.length);
  };

  return (
    <Box
       id='projectimg'
      border="3px solid #A3C8B9"
      // width="700px"
      // height="395px"
      borderRadius="5px"
      overflow="hidden"
      position="relative"
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{ width: "100%", height: "100%", display: index === currentIndex ? "block" : "none" }}
        />
      ))}
      <IconButton
        aria-label="Previous"
        icon={<ChevronLeftIcon style={{width:"20px", height:"30px", backgroundColor:"#A3C8B9", border:"none"}}/>}
        onClick={prevImage}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        border={"none"}
        borderRadius={"4px"}
      />
      <IconButton
        aria-label="Next"
        icon={<ChevronRightIcon  style={{width:"20px", height:"30px", backgroundColor:"#A3C8B9", border:"none"}}/>}
        onClick={nextImage}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        border={"none"}
        borderRadius={"4px"}
      />
    </Box>
  );
}

export default Work;
