"use client"

import { useState, type ReactNode } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { Theme } from "@/theme/extendTheme"

export function Providers(props: { children: ReactNode }) {
    return <ChakraProvider theme={Theme}>{props.children}</ChakraProvider>
}
