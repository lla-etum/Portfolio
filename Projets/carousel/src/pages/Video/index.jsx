import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react"

const GlobalStyle = createGlobalStyle`
    * {
        background-color: #282c34;
        color: white;
    }
`

const VideoCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const VideoRadio = styled.div`
    display: flex;
    flex-direction: row;
`

const RadioVideo = styled.div`
    margin-right: 1rem;
`

const VideoEspace = styled.div`
    margin-top: 2rem;
`

function Video() {
    const defaultVideo = "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"

    const [videoUrl, setVideoUrl] = useState(defaultVideo)
    
    function handleRadioChange(e) {
        setVideoUrl(e.target.value)
    }

    return(
        <VideoCenter>
            <GlobalStyle />
            <h1>Project 6: Video Player</h1>
            <VideoRadio>
                <RadioVideo>
                    <input type="radio" id="deer" value="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4" name="video" onChange={handleRadioChange}/>
                    <label for="deer">deer</label>
                </RadioVideo>

                <RadioVideo>
                    <input type="radio" id="snail" value="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4" name="video" onChange={handleRadioChange}/>
                    <label for="snail">snail</label>
                </RadioVideo>

                <RadioVideo>
                    <input type="radio" id="cat" value="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4" name="video" onChange={handleRadioChange}/>
                    <label for="cat">cat</label>
                </RadioVideo>

                <div>
                    <input type="radio" id="spider" value="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4" name="video" onChange={handleRadioChange}/>
                    <label for="spider">spider</label>
                </div>
            </VideoRadio>
            <VideoEspace>
                {videoUrl &&
                    <video key={videoUrl} controls autoPlay muted width="1000">
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                }
            </VideoEspace>
        </VideoCenter>
    )
}

export default Video