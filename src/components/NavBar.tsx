import navData from "@/data/nav.json"
import { renderItems } from "@/utils/render"
import { Flex, Spacer, SimpleGrid, Link, Text } from "@chakra-ui/react"

type NavBarProps = {
    height?: number
}

export default function NavBar({ height }: NavBarProps) {
    const navItem = (item: any, index: number, length: number) => {
        return (
            <Link
                key={index}
                href={item.link}
                borderRadius="full"
                mx="0.5"
                bg="transparent"
                _hover={{ bg: "brand.200", color: "black" }}
            >
                <Text
                    px="5"
                    pt="2"
                    pb="1"
                    fontWeight="600"
                    as="span"
                    display="inline-block"
                >
                    {item.title}
                </Text>
            </Link>
        )
    }

    return (
        <>
            <SimpleGrid
                as={"nav"}
                align-items="center"
                gap={2}
                pl={4}
                h={height}
                zIndex="100"
            >
                <Flex
                    justifyContent="flex-start"
                    alignItems="center"
                    zIndex="10"
                >
                    {renderItems(navData.links, navItem)}
                </Flex>
            </SimpleGrid>
        </>
    )
}
