import { Box, Flex, Heading, Image, Link, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import "../components/css/home.css"

const Stats = () => {
  return (
    <Box id="statistics" marginTop={"130px"} textAlign="center">
      <Heading color={"#131313"} fontSize={"40px"}>
        {" "}
        GitHub Stats 
      </Heading>
      <Stack m="auto">
        <Box
          className="react-activity-calendar"
          m={"auto"}
          mt="50px"
          mb={"40px"}
          style={{ background: "131313", color: "white" }} 
        >
          <Link style={{color:"#131313"}} href="https://github.com/nikhil-pillare" target="_blank">
           
              <GitHubCalendar username="nikhil-pillare" />
           
          </Link>
        </Box>
        
          <div style={{margin:"auto"}} >
            <div id="statgit">
            <Link
              // border={"3px solid white"}
              w={{ base: "100%", md: "33%" }}
              mt={{ base: "10px", md: "0px" }}
              href="https://github.com/nikhil-pillare"
              target="_blank"
            >
              <Flex justifyContent={"center"} backgroundColor={"#A3C8B9"} border={"4px solid #A3C8B9"} borderRadius={"5px"}>
               
               <Image
                    id="github-streak-stats"
                    src={
                      "https://github-readme-streak-stats.herokuapp.com/?user=nikhil-pillare&theme=dark"
                    }
                  ></Image>

              
                
                
              </Flex>
            </Link>

            <Link
              // border={"3px solid white"}
              ml={"25px"}
              w={{ base: "100%", md: "30%" }}
              mt={{ base: "10px", md: "0px" }}
              href="https://github.com/nikhil-pillare"
              target="_blank"
            >
              <Flex justifyContent={"center"} >
                
                  <Image
                  border={"4px solid #A3C8B9"} borderRadius={"10px"}
                    id="github-top-langs"
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=nikhil-pillare&layout=compact&theme=dark"
                  ></Image>
                
              </Flex>
            </Link>

            <Link
              
              ml={"25px"}
              w={{ base: "100%", md: "31%" ,}}
              mt={{ base: "10px", md: "0px" }}
              href="https://github.com/nikhil-pillare"
              target="_blank"
            >
              <Flex justifyContent={"center"} border={"4px solid #A3C8B9"} borderRadius={"5px"}>
                
                  <Image
                  backgroundColor={"#A3C8B9"}
                    id="github-stats-card"
                    src="https://github-readme-stats.vercel.app/api?username=nikhil-pillare&count_private=true&show_icons=true&theme=dark"
                  ></Image>
                
              </Flex>
            </Link>
            </div>
          <Flex
            w={"90%"}
            justifyContent={{ base: "center", md: "space-around" }}
            marginTop="30px"
            direction={{ base: "column", md: "row",sm:"column" }}
            // border={"3px solid white"}
          >
            
          </Flex>
          </div>
          
        
      </Stack>
    </Box>
  );
};

export default Stats;
