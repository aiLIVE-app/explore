import { defineStyleConfig } from "@chakra-ui/react"

export const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: "bold",
        borderRadius: "full",
        lineHeight: "1.3rem",
        display: "block",
    },
    sizes: {
        md: {
            fontSize: "md",
            px: 7,
            pt: 3.5,
            pb: 2.5,
        },
    },
    variants: {
        solid: {
            bg: "brand.100",
            color: "white",
            height: "auto",
            _hover: { backgroundColor: "brand.200", color: "black" },
        },
    },
    defaultProps: {
        size: "md",
        variant: "solid",
    },
})
