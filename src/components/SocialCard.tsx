import navData from "@/data/nav.json"
import { renderItems } from "@/utils/render"
import { Box, Text, Button, Flex, Heading, Image, Link } from "@chakra-ui/react"
import { FaXTwitter } from "react-icons/fa6"
import { FaTelegramPlane } from "react-icons/fa"

type SocialCardProps = {
    title?: string
    backgroundImage?: string
    backgroundPosition?: string
    backgroundSize?: string
    items?: any
}

export default function SocialCard({
    title,
    backgroundImage = "",
    backgroundPosition = "center",
    backgroundSize = "cover",
    items,
}: SocialCardProps) {
    const socialItem = (item: any, index: number, length: number) => {
        return (
            <Link
                key={index}
                href={item.link}
                target="_blank"
                color="black"
                background="white"
                borderRadius="full"
                p={2.5}
                fontSize="1.5rem"
                ml="3"
                _hover={{ backgroundColor: "brand.100", color: "white" }}
            >
                {item.title == "twitter" && <FaXTwitter />}

                {item.title == "telegram" && <FaTelegramPlane />}
            </Link>
        )
    }

    return (
        <>
            <Box
                p="4"
                w="100%"
                h="130px"
                backgroundSize={backgroundSize}
                backgroundPosition={backgroundPosition}
                backgroundImage={"url(" + backgroundImage + ")"}
                borderRadius="2xl"
                overflow="hidden"
            >
                <Flex justifyContent="flex-end" alignItems="center" h="100%">
                    <Flex align="right" direction="column" h="100%">
                        <Heading
                            as="h2"
                            flexGrow="1"
                            fontSize="2xl"
                            textTransform="uppercase"
                            color="black"
                            fontWeight="bold"
                        >
                            Follow Us
                        </Heading>

                        <Flex justifyContent="flex-end">
                            {renderItems(items, socialItem)}
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}
