import styled, { createGlobalStyle } from "styled-components"
import { useState } from "react"

const GlobalStyle = createGlobalStyle`
    * {
        background-color: #e1e8ff;
    }
`

const BMICenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 3rem;
`

const BMIBoite = styled.div`
    border: 1px solid transparent;
    background-color: darkblue;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 80px;
    & h1 {
        color: white;
        background-color: darkblue;
    }
`

const BMIBoite2 = styled.div`
    border: 1px solid transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 200px;
    background-color: white;
    padding-bottom: 1rem;
    & * {
        background-color: white;
    }

    & input[type=range] {
        width: 70%;
    }

    & label {
        align-self: flex-start;
        text-align: left;
        padding: 1rem 0 0.1rem 0;
        margin-left: 4.7rem;
    }

    & p {
        padding-top: 0.4rem;
    }
`

const BMIBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    background-color: darkblue;
    color: white;
    width: 80px;
    height: 35px;
    margin-top: -0.5rem;
`

function BMI() {
    const [rangeWeight, setRangeWeight] = useState(50)
    const [rangeHeight, setRangeHeight] = useState(150)


    function handleRangeWeight(e) {
        setRangeWeight(e.target.value)
    }

    function handleRangeHeight(e) {
        setRangeHeight(e.target.value)
    }

    const nombre = rangeWeight/(rangeHeight/100)**2
    const arrondi = nombre.toFixed(1)

    return(
        <BMICenter>
            <GlobalStyle />
            <BMIBoite>
                <h1>Project 7: BMI CALCULATOR</h1>
            </BMIBoite>
            <BMIBoite2>
                
                <label for="weight">Weight: {rangeWeight} kg</label>
                <input type="range" id="weight" name="weight" min="40" max="220" onChange={handleRangeWeight}/>


                <label for="height">Height: {rangeHeight} cm</label>
                <input type="range" id="height" name="height" min="140" max="220" onChange={handleRangeHeight}/>

                <p>Your BMI is</p>
                
                <BMIBox>
                    {arrondi}
                </BMIBox>
            </BMIBoite2>
        </BMICenter>
    )
}

export default BMI