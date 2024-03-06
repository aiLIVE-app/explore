import navData from "@/data/nav.json"
import { renderItems } from "@/utils/render"
import {
    Flex,
    Spacer,
    SimpleGrid,
    Link,
    Text,
    Box,
    Image,
} from "@chakra-ui/react"

type GalleryProps = {
    items: any
}

export default function Gallery({ items }: GalleryProps) {

    const galleryItem = (item: any, index: number, length: number) => {
        return (
            <Box key={index} borderRadius="2xl" textAlign="center" overflow="hidden">
                <Text
                    px="5"
                    pt="3"
                    pb="3"
                    fontWeight="600"
                    as="span"
                    display="inline-block"
                    textTransform="uppercase"
                    color="brand.200"
                    fontSize="2xl"
                >
                    {item.title}
                </Text>
                <Box borderRadius="2xl" overflow="hidden">
                    <Image src={item.link} alt={item.title} />
                </Box>
            </Box>
        )
    }

    return (
        <>
            <SimpleGrid
                as={"div"}
                columns={{ base: 2, md: 4 }}
                spacing={{ base: 5, md: 10 }}
                /*              align-items="center"
                gap={2}
                px={4}
                pl={4}*/
                zIndex="100"
            >
                {renderItems(items, galleryItem)}
            </SimpleGrid>
        </>
    )
}
