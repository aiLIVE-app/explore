"use client"
import React, { useState, useEffect } from "react"
import { Flex, Spacer, Text, Link, Box, Container } from "@chakra-ui/react"
import NavBar from "@/components/NavBar"
import { useScroll, useMotionValueEvent } from "framer-motion"
import homeData from "@/data/home.json"

function Header() {
    const { scrollY } = useScroll()
    const [isScrollUp, setIsScrollUp] = useState(true)
    const [prevScrollY, setPrevScrollY] = useState(0)

    const scrollBreakPoint = 100

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > prevScrollY) {
            setIsScrollUp(false)
        } else {
            setIsScrollUp(true)
        }

        setPrevScrollY(latest)
    })

    return (
        <>
            <Box h={"40px"}></Box>
            <Box
                as="header"
                py={prevScrollY < scrollBreakPoint ? "4" : "2"}
                pl="3"
                bg={prevScrollY < scrollBreakPoint ? "" : "rgba(0,0,0,0.8)"}
                position="fixed"
                top={isScrollUp ? "0%" : "-60px"}
                left={0}
                right={0}
                w="100%"
                zIndex={20}
                transitionDuration="0.3s"
                transitionTimingFunction="linear"
            >
                <Container maxW="8xl">
                    <Flex alignItems="center">
                        <Box
                            flexGrow="1"
                            fontFamily="logo"
                            fontSize={{
                                base: "1.3rem",
                                md: "2rem",
                                lg: "2rem",
                            }}
                        >
                            <Link href="/" _hover={{ textTransform: "none" }}>
                                {homeData?.site?.name}
                            </Link>
                        </Box>
                        <NavBar height={30} />
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default Header
