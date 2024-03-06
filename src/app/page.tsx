"use client"

import homeData from "@/data/home.json"
import socialData from "@/data/social.json"
import Header from "@/components/Header"
import Slider from "@/components/Slider"
import Gallery from "@/components/Gallery"
import Panel from "@/components/Panel"
import SocialCard from "@/components/SocialCard"
import { Box, Container, Flex } from "@chakra-ui/react"

function Home() {
    return (
        <main>
            <Header />

            <Container maxW="10xl" mt="12" position={"relative"} h="screen">
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={10}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    m={{ base: "8", md: "12", lg: "12" }}
                >
                    <Box
                        backgroundColor="brand.300"
                        display="inline-block"
                        px={{ base: "10", md: "12", lg: "12" }}
                        py={{ base: "10", md: "14", lg: "14" }}
                        borderRadius="3xl"
                    >
                        <Panel
                            content={homeData.hero}
                            fontWeight={"700"}
                            maxW="3xl"
                            mb="6"
                        />
                    </Box>
                </Box>

                <Box borderRadius="3xl" overflow="hidden">
                    <Slider
                        images={homeData.hero.images}
                    />
                </Box>
            </Container>

            <Container maxW="10xl" mt="40" mb="4">
                <Panel content={homeData.whatisfable} />
            </Container>

            <Container maxW="full" mt="4" mb="44" px="0">
                <Box
                    w="100%"
                    h="300px"
                    backgroundSize="cover"
                    backgroundPosition="bottom center"
                    backgroundImage="url(./hero1.svg)"
                    clipPath="polygon(0% 100%, 100% 100%, 100% 54%, 74% 95%, 0 33%)"
                ></Box>
            </Container>

            <Container maxW="10xl" mt="44" mb="20">
                <Panel content={homeData.whatissouls} maxW="xl" />
            </Container>

            <Container maxW="10xl" mt="20" mb="44">
                <Flex alignItems="center" flexDirection="column">
                    <Box
                        w="100%"
                        h="100%"
                        backgroundSize="cover"
                        backgroundPosition="bottom center"
                        backgroundImage="url(./hero1.svg)"
                        borderRadius="2xl"
                        overflow="hidden"
                        maxW="6xl"
                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            overflow="hidden"
                            px={{ base: "6", lg: "28" }}
                            py={{ base: "6", lg: "28" }}
                        >
                            <Box
                                as="video"
                                src="./appPreview.mp4"
                                poster="./videoPreview.jpg"
                                autoPlay={true}
                                objectFit="contain"
                                muted
                                w="660px"
                                maxW="100%"
                                borderRadius="2xl"
                                loop
                            />
                        </Box>
                    </Box>
                </Flex>
            </Container>

            <Container maxW="10xl" mt="44" mb="20">
                <Panel content={homeData.whatsnext} maxW="xl">
                    <Box mt="3" mb="20" maxW="68rem">
                        <Gallery items={homeData.whatsnext.images} />
                    </Box>
                </Panel>
            </Container>

            <Container maxW="6xl" mt="40" mb="40">
                <SocialCard
                    title={socialData.title}
                    backgroundImage={socialData.backgroundImage}
                    backgroundPosition="top left"
                    backgroundSize="130%"
                    items={socialData.links}
                />
            </Container>
        </main>
    )
}

export default Home
