import navData from "@/data/nav.json"
import { renderItems } from "@/utils/render"
import {
    Box,
    Container,
    Text,
    Button,
    Flex,
    Heading,
    Image,
} from "@chakra-ui/react"

type PanelProps = {
    content: any,
    fontWeight?: string,
    mb?: string,
    maxW?: string,
    children?: any
}

export default function Panel({
    content = {},
    fontWeight = "400",
    mb = "16",
    maxW = "",
    children
}: PanelProps) {
    if (content?.title == undefined) {
        return
    }

    const textItem = (item: any, index: number, length: number) => {
        return (
            <Text
                key={index}
                fontSize={{ base: "xl", md: "2xl", lg: "2xl" }}
                fontWeight={fontWeight}
                mb={index == length - 1 ? "0" : ""}
            >
                {item}
            </Text>
        )
    }

    return (
        <>
            <Flex alignItems="center" flexDirection="column">
                <Box mb={mb} textAlign="center" maxW={maxW}>
                    <Heading
                        as="h2"
                        fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
                        color="brand.200"
                        fontWeight={fontWeight}
                        mb="3"
                    >
                        {content.title}
                    </Heading>
                    {renderItems(content.text, textItem)}
                </Box>

                {children}

                <Button as="a" href={content.button.link}>
                    {content.button.title}
                </Button>
            </Flex>
        </>
    )
}
