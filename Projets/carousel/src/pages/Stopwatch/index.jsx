import styled, { createGlobalStyle } from "styled-components"
import { useState, useEffect } from "react"


const GlobalStyle = createGlobalStyle`
    * {
        background-color: black;
    }
`

const StopCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;
`

const StopTimer = styled.div`
    font-size: 12em;
    color: white;
`

const StopButton = styled.button`
    background-color: #2596be;
    color: white;
    font-size: 20px;
    border: 1px solid transparent;
    width: 80px;
    height: 50px;
    cursor: pointer;
    margin-top: 1rem;
    &:hover {
        filter: brightness(80%);
    }
`

const StopResume = styled.button`
    background-color: ${props => props.couleur ? "#1c8595" : "red"};
    color: white;
    font-size: 20px;
    border: ${props => props.couleur ? "3px solid #205962" : "3px solid #702831"};
    width: ${props => props.couleur ? "110px" : "80px"};
    height: 55px;
    cursor: pointer;
    margin-top: 1rem;
`

const CentreBouton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const BoutonReset = styled.button`
    color: grey;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 19px;
    margin-top: 1rem;
    width: 100px;
    filter: brightness(50%)
`

function Stopwatch() {
    const [seconde, setSeconde] = useState(0)
    const [minute, setMinute] = useState(0)
    const [heure, setHeure] = useState(0)
    const [enCours, setEnCours] = useState(false)
    const [couleur, setCouleur] = useState(false)
    const [afficherBouton, setAfficherBouton] = useState(false)
    const [afficherStart, setAfficherStart] = useState(true)
    const [couleurStop, setCouleurStop] = useState(false)
    const [couleurResume, setCouleurResume] = useState(false)

    const secondeZero = seconde.toString().padStart(2, "0")
    const minuteZero = minute.toString().padStart(2, "0")
    const heureZero = heure.toString().padStart(2, "0")

    function toggleChronometre() {
        setEnCours(!enCours)
    }

    function boutonCouleur() {
        setCouleur(!couleur)
    }

    function handleClick() {
        setAfficherBouton(!afficherBouton)
    }

    function handleStart() {
        setAfficherStart(!afficherStart)
    }

    function boutonReset() {
        setSeconde(0)
        setMinute(0)
        setHeure(0)
    }

    function boutonCouleurStop() {
        setCouleurStop(!couleurStop)
    }

    function boutonCouleurResume() {
        setCouleurResume(!couleurResume)
    }

    useEffect(() => {
        if (enCours) {
            const intervalId = setInterval(() => {
                setSeconde(seconde => {
                    if (seconde < 59) {
                        return seconde + 1
                    } else {
                        setMinute(minute => minute + 1)
                        return 0
                    }
                })
        
                setMinute(minute => {
                    if (minute > 59) {
                        setHeure(heure => heure + 1)
                        return 0
                    } else {
                        return minute
                    }
                })
            }, 1000)
            return () => clearInterval(intervalId) 
        }
    }, [enCours])

    return(
        <StopCenter>
            <GlobalStyle />
            <div>
                <StopTimer>{`${heureZero}:${minuteZero}:${secondeZero}`}</StopTimer>
                <CentreBouton>
                    {afficherStart &&
                        <StopButton couleur={couleurStop} onClick={() => {toggleChronometre(); boutonCouleur(); handleClick(); handleStart(); boutonCouleurStop();}}>Start</StopButton>
                    }
                    {afficherBouton && 
                    <div>
                        <StopResume couleur={couleurResume} onClick={() => {toggleChronometre(); boutonCouleur(); boutonCouleurResume();}}>{enCours ? "Stop" : "Resume"}</StopResume>
                        <BoutonReset onClick={() => {setEnCours(false); boutonReset(); setCouleurStop(true); setCouleurResume(false); handleClick(); handleStart();}}>Reset</BoutonReset>
                    </div>}
                </CentreBouton>
            </div>
        </StopCenter>
    )
}

export default Stopwatch