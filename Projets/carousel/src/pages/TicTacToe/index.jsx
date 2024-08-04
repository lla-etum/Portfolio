import styled from "styled-components"
import { useState, useEffect } from "react"

const Centrage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    flex-direction: column;
`

const TicCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 75vh;
    width: 500px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const TicBoite = styled.div`
    width: 400px;
    height:  400px;
    background-color: blue;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 4px;
    padding: 4px;
    & div {
        background-color: white;
        cursor: pointer;
        font-size: 50px;
        color: blue;
        text-align: center;
        padding: 30px;
        height: 71px;
        width: 71px;
        transition: 400ms
    }

    & div:hover {
        background-color: blue;
        transition: 400ms
    }

    & div.joueur {
        background-color: white;
    }
`

const TicTour = styled.div`
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: lightblue;
    width: 400px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 2.5rem;
`

const TicOption = styled.div`
    display: flex;
    flex-direction: row;
`

const TicReset = styled.div`
    border: 1px solid transparent;
    border-radius: 5px 0 0 5px;
    background-color: grey;
    cursor: pointer;
    color: white;
    font-size: 20px;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    transition: 200ms;
    &:hover {
        background-color: black;
        transition: 200ms;
    }
`

const TicTaunt = styled.div`
    border: 1px solid transparent;
    border-radius: 0 5px 5px 0;
    background-color: grey;
    cursor: pointer;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    margin-top: 2rem;
    transition: 200ms;
    &:hover {
        background-color: black;
        transition: 200ms;
    }
`

const TicInfo = styled.div`
    margin-top: 2rem;
    background-color: lightgrey;
    width: 400px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TicOverlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const TicPopup = styled.div`
    background: #fff;
    border-radius: 5px;
    padding: 20px;
    width: 300px;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TicButton = styled.button`
    margin-top: 1rem;
    width: 100px;
`

const PopTaunt = styled.div`
    background-color: lightgrey;
    position: fixed;
    top: 1;
    bottom: 0;
    left: 1;
    right: 0;
    width: 200px;
    height: 100px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    opacity: 0;
    transition: opacity 1s ease;
    margin-bottom: 1rem;

    &.taunt {
        opacity: 1;
    }
`

function TicTacToe() {
    const [joueur, setJoueur] = useState(Array(9).fill(""))
    const [tour, setTour] = useState(0)
    const [gagnant, setGagnant] = useState('')
    const [popup, setPopup] = useState(false)
    const [taunt, setTaunt] = useState(false)

    function ouvrirPopup() {
        setPopup(true)
    }

    function fermerPopup() {
        setPopup(false)
    }

    function popTaunt() {
        setTaunt(true)
        setTimeout(() => {
            setTaunt(false)
        }, 4000);
    }

    const incrementer = (index) => {
        if (gagnant !== "" || joueur[index] !== "") return
        setJoueur(joueur.map((item, i) => i === index ? (joueur[index] === "" ? (tour % 2 === 0 ? "X" : "O") : joueur[index]) : item))
        if (joueur[index] === "") {
            setTour(tour + 1)
        }
    }

    useEffect(() => {
        if (joueur[0] !== "" && joueur[0] === joueur[1] && joueur[1] === joueur[2]) {
            setGagnant(`Le joueur ${joueur[0]} a gagné !`)
            ouvrirPopup()
        } else if (joueur[3] !== "" && joueur[3] === joueur[4] && joueur[4] === joueur[5]) {
            setGagnant(`Le joueur ${joueur[3]} a gagné !`)
            ouvrirPopup()
        } else if (joueur[6] !== "" && joueur[6] === joueur[7] && joueur[7] === joueur[8]) {
            setGagnant(`Le joueur ${joueur[6]} a gagné !`)
            ouvrirPopup()
        } else if (joueur[1] !== "" && joueur[1] === joueur[4] && joueur[4] === joueur[7]) {
            setGagnant(`Le joueur ${joueur[1]} a gagné !`)
            ouvrirPopup()
        } else if (joueur[2] !== "" && joueur[2] === joueur[5] && joueur[5] === joueur[8]) {
            setGagnant(`Le joueur ${joueur[2]} a gagné !`)
            ouvrirPopup()
        } else if (joueur[4] !== "" && ((joueur[0] === joueur[4] && joueur[4] === joueur[8]) || (joueur[2] === joueur[4] && joueur[4] === joueur[6]))) {
            setGagnant(`Le joueur ${joueur[4]} a gagné !`)
            ouvrirPopup()
        }
    }, [joueur])

    return(
        <Centrage>
            <TicCenter>
                <TicTour>
                    {tour % 2 === 0 ? "It's your turn X" : "It's your turn O"}
                </TicTour>

                <TicBoite>
                    <div className={`item1 ${joueur[0] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(0)}}>{joueur[0]}</div>
                    <div className={`item2 ${joueur[1] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(1)}}>{joueur[1]}</div>
                    <div className={`item3 ${joueur[2] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(2)}}>{joueur[2]}</div>
                    <div className={`item4 ${joueur[3] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(3)}}>{joueur[3]}</div>
                    <div className={`item5 ${joueur[4] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(4)}}>{joueur[4]}</div>
                    <div className={`item6 ${joueur[5] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(5)}}>{joueur[5]}</div>
                    <div className={`item7 ${joueur[6] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(6)}}>{joueur[6]}</div>
                    <div className={`item8 ${joueur[7] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(7)}}>{joueur[7]}</div>
                    <div className={`item9 ${joueur[8] !== "" ? 'joueur' : ''}`} onClick={() => {incrementer(8)}}>{joueur[8]}</div>
                </TicBoite>

                {popup && (
                    <TicOverlay>
                        <TicPopup>
                            {gagnant}
                            <TicButton onClick={() => {fermerPopup(); setJoueur(Array(9).fill("")); setTour(0); setGagnant('');}}>Recommencer</TicButton>
                        </TicPopup>
                    </TicOverlay>
                )}

                <TicOption>
                    <TicReset onClick={() => {setJoueur(Array(9).fill("")); setTour(0); setGagnant('');}}>
                        Reset Game
                    </TicReset>
                    <TicTaunt onClick={() => {popTaunt();}}>Taunt</TicTaunt>
                    {taunt && (
                        <PopTaunt className={taunt ? 'taunt' : ''}>
                            <h2>CHEH NULLOS</h2>
                        </PopTaunt>
                    )}
                </TicOption>
            </TicCenter>

            <TicInfo>
                Playing in:
            </TicInfo>
        </Centrage>
    )
}

export default TicTacToe