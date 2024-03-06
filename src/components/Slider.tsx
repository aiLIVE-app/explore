import { useEffect } from "react"
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
// @ts-ignore
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

type SliderProps = {
    images: string[]
    type?: string
    autoPlay?: boolean
    interval?: number
    pauseOnHover?: boolean
    pagination?: boolean
    rewind?: boolean
    easing?: string
    height?: string
    arrows?: boolean
    effect?: string
}

export default function Slider({
    images,
    type = "fade",
    autoPlay,
    interval,
    pauseOnHover,
    pagination,
    rewind,
    easing,
    height,
    arrows,
    effect,
}: SliderProps) {
    const slideItem = (item: any, index: number, length: number) => {
        return (
            <SplideSlide key={index}>
                <Box className="ken-burn">
                    <Image src={item} alt={item} />
                </Box>
            </SplideSlide>
        )
    }

    const splideOptions = {
        type: type || "fade",
        autoplay: autoPlay || true,
        interval: interval || 5000,
        pauseOnHover: pauseOnHover || false,
        pagination: pagination || false,
        rewind: rewind || true,
        easing: easing || "linear",
        height: height || "560px",
        arrows: arrows || false,
    }

    if (effect == "kenburn") {
        // for now it's using css /scss/_slider.scss
    }

    return (
        <>
            <Splide hasTrack={false} options={splideOptions}>
                <SplideTrack>{renderItems(images, slideItem)}</SplideTrack>
            </Splide>
        </>
    )
}
