import type { Metadata } from "next"
import { Providers } from "./providers"
import Head from "@/components/Head"
import homeData from "@/data/home.json"
import "@/scss/main.scss"

export const metadata: Metadata = homeData.metadata

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <Head />
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
