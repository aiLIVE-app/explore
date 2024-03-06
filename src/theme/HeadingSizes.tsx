import { defineStyle } from "@chakra-ui/react"
export const HeadingSizes = {
    "4xl": defineStyle({
        fontSize: "5xl",
        lineHeight: 1.1,
    }),
    "3xl": defineStyle({
        fontSize: "4xl",
        lineHeight: 1.3,
    }),
    "2xl": defineStyle({
        fontSize: "3xl",
        lineHeight: 1.5,
    }),
    xl: defineStyle({
        fontSize: "2xl",
        lineHeight: 1.7,
    }),
    lg: defineStyle({
        fontSize: "xl",
        lineHeight: 1.8,
    }),
    md: defineStyle({
        fontSize: "lg",
        lineHeight: 1.9,
    }),
    sm: defineStyle({
        fontSize: "md",
        lineHeight: 2,
    }),
    xs: defineStyle({
        fontSize: "sm",
        lineHeight: 2,
    }),
}
