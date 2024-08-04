import styled from "styled-components"
import { useState } from "react"

function Carousel() {
    const CarouselDiv = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `

    const CarouselTitre = styled.h2`
        display: flex;
        justify-content: center;
        font-size: 2em;
    `

    const CarouselCentre = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `

    const CarouselButton = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 70vh;
    `

    const ImageButton = styled.button`
        border: 1px solid black;
        border-radius: 50%;
        height: 40px;
        width: 40px;
        background-color: black;
        cursor: pointer;
    `

    const FlecheButton = styled.span`
        color: white;
        font-size: 1.5em;
    `

    const CarouselImage = styled.div`
        display: flex;
        justify-content: center;
    `

    const image = [
        "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    ]

    const [current, setCurrent] = useState(0)
    function nextSlide() {
        setCurrent(current === image.length - 1 ? 0 : current + 1)
    }

    function prevSlide() {
        setCurrent(current === 0 ? image.length - 1 : current - 1)
    }

    return(
        <CarouselDiv>
            <CarouselTitre>Project 1: Carousel</CarouselTitre>
            <CarouselCentre>
                <CarouselButton>
                    <ImageButton onClick={prevSlide}><FlecheButton>⬅</FlecheButton></ImageButton>
                </CarouselButton>
                <CarouselImage>
                    {image.map((image, index) => current === index &&
                        (<div key={image}>
                            <img src={image} alt="images" height="700px" width="800px" object-fit="contain"/>  
                        </div>
                        )
                    )}
                </CarouselImage>
                <CarouselButton>
                    <ImageButton onClick={nextSlide}><FlecheButton>⮕</FlecheButton></ImageButton>
                </CarouselButton>
            </CarouselCentre>
        </CarouselDiv>
    )
}

export default Carousel