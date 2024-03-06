import { extendTheme } from "@chakra-ui/react"
import { Button } from "@/theme/Button"
import { Colors } from "@/theme/Colors"
import { HeadingSizes } from "@/theme/HeadingSizes"
import { StyleFunctionProps } from "@chakra-ui/theme-tools"

export const Theme = extendTheme({
    components: {
        Button,
        Heading: {
            baseStyle: ({ as }: { as: string }) => {
                switch (as) {
                    case "h1":
                        return HeadingSizes["4xl"]
                    case "h2":
                        return HeadingSizes["3xl"]
                    case "h3":
                        return HeadingSizes["2xl"]
                    case "h4":
                        return HeadingSizes["xl"]
                    case "h5":
                        return HeadingSizes["lg"]
                    case "h6":
                        return HeadingSizes["md"]
                    default:
                        return HeadingSizes["3xl"]
                }
            },
            sizes: {
                dynamic: {},
            },
            defaultProps: {
                size: "dynamic",
            },
        },
    },
    colors: Colors,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                color: "#ffffff",
                bg: "#101827",
                /*bg: 'green',*/
                /*font: 'arial'*/
            },
            p: {
                mb: { base: "1.7rem", lg: "1.3rem" },
            },
        }),
    },
    fonts: {
        heading: `"Josefin Sans", Sans-serif`,
        body: `"Josefin Sans", Sans-serif`,
        logo: `"Goldman", sans-serif`,
    },
    sizes: {
        // maxW: 'xl' // largeSizes.xl
        "9xl": "100rem",
        "10xl": "105rem",
    },
    /*    Heading:{
        sizes:{
            '4xl': '32rem'
        },
        '4xl': '32rem',
        'h2': '32rem'
    },*/
    fontSizes: {
        "2xl": "1.375rem",
    },
})
