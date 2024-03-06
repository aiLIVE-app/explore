"use client"

import { Box, Container, Text, Button, Flex, Heading } from "@chakra-ui/react"

function typographyPreview() {
    return (
        <main>
            <Container maxW="10xl">
                <Flex flexDirection="column">
                    <Heading as="h1" color="brand.200" fontWeight="400">
                        What is $FABLE
                    </Heading>
                    <Heading as="h2" color="brand.200" fontWeight="400">
                        What is $FABLE
                    </Heading>
                    <Heading as="h3" color="brand.200" fontWeight="400">
                        What is $FABLE
                    </Heading>
                    <Heading as="h4" color="brand.200" fontWeight="400">
                        What is $FABLE
                    </Heading>
                    <Heading as="h5" color="brand.200" fontWeight="400">
                        What is $FABLE
                    </Heading>
                    <Heading as="h6" color="brand.200" fontWeight="400">
                        What is $FABLE
                    </Heading>
                </Flex>
            </Container>
        </main>
    )
}

export default typographyPreview
