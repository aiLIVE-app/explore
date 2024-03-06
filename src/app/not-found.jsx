import Link from "next/link"
import {
    Box,
    Container,
    Text,
    Button,
    Flex,
    Heading,
    Image,
} from "@chakra-ui/react"
import socialData from "@/data/social.json"
import SocialCard from "@/components/SocialCard"
import Header from "@/components/Header"

export default function NotFound() {
    return (
        <>
            <Header />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                h="calc(100vh - 40px)"
                w="100vw"
                flexDirection="column"
            >
                <Heading as="h2" fontSize="5rem" align="center">
                    <h2>404</h2>
                </Heading>
                <Text as="span" fontSize="2xl" align="center">
                    <p>The link is broken</p>
                </Text>
                <Container maxW="3xl">
                    <SocialCard
                        title={socialData.title}
                        backgroundImage={socialData.backgroundImage}
                        backgroundPosition="top left"
                        backgroundSize="130%"
                        items={socialData.links}
                    />
                </Container>
            </Box>
        </>
    )
}
