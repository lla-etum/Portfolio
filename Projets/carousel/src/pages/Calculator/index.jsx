import styled from "styled-components"
import { useState, useEffect } from "react"
import { FaDivide, FaLeftLong, FaPlusMinus, FaRotateLeft } from "react-icons/fa6"
import * as math from "mathjs"

const Centre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Calculatric = styled.div`
    background-color: #282828;
    width: 890px;
    height: 400px;
    margin-top: 4rem;
`

const Resultat = styled.div`
    background-color: #e6e6e6;
    height: 80px;
    width: auto;
    margin: 0.6rem 0.9rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 3rem;
    font-size: 40px;
    font-weight: bold; 
`

const CentreBouton = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1rem;
`

const BoutonFonc = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 37px;
    background-color: ${props => {
        if (["ret", "back", "C", "AC"].includes(props.valeur)) {
            return "#af81a7";
          } else {
            return "#8fbe8d";
          }
    }};
    border: transparent;
    border-radius: 10px;
    color: white;
    font-size: 17px;
    font-weight: bold;
    margin: 0.25rem 0.3rem;
    cursor: pointer;
    transition: 200ms;
    &:hover {
        filter: brightness(80%);
        transition: 200ms;
        box-shadow: white 0px 2px 8px 0px;
    }

    &.bouton-clique {
        background-color: #206bd6;
        border: 3px solid #356297;
    }
`

const CentreChiffre = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 750px;
`

const Bouton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => {
        if (typeof props.valeur === 'string') {
            return "#969696";
          } else if (typeof props.valeur === 'number') {
            return '#7790b4';
          }
    }};
    color: white;
    width: 133px;
    height: 37px;
    border: transparent;
    border-radius: 10px;
    cursor: pointer;
    margin: 0.25rem 0.3rem;
    font-size: 17px;
    font-weight: bold;
    transition: 200ms;
    &:hover {
        filter: brightness(80%);
        transition: 200ms;
        box-shadow: white 0px 2px 8px 0px;
    }

    &.bouton-clique {
        background-color: #206bd6;
        border: 3px solid #356297;
    }
`

const EquationVert = styled.span`
    color: #27a74c;
`

function Calculatrice() {
    const [equation, setEquation] = useState("0")
    const [lastEquation, setLastEquation] = useState(null)
    const [resultat, setResultat] = useState(null)
    const [boutonActive, setBoutonActive] = useState(null)
    const [funcBoutonActive, setFuncBoutonActive] = useState(null)

    const chiffre = [7, 8, 9, "/", "rac", 4, 5, 6, "*", "x^2", 1, 2, 3, "-", "1/x", 0, ".", "+-", "+"]
    const func = ["ret", "back", "C", "AC", "mc", "m+", "m-", "mr"]

    const icones = {
        "ret": <FaRotateLeft />,
        "back": <FaLeftLong />,
        "/": <FaDivide />,
        "*": "x",
        "+-": <FaPlusMinus />,
        "rac": "√"
    }

    const EGAL_BOUTON = "egal"

    function handleClick(index) {
        setBoutonActive(index)
        setFuncBoutonActive(null)
    }

    function handleFuncClick(index) {
        setFuncBoutonActive(index)
        setBoutonActive(null)
    }

    function fonction(valeur) {
        if (valeur === "AC" || valeur === "mr") {
            setResultat(null)
            setEquation("0")
        } else if (valeur === "C") {
            setEquation(equation.slice(0, -1))
        } else if (valeur === "back") {
            setEquation(equation.slice(1))
        }
    }

    function calcule(valeur) {
        if (equation === "0") {
            setEquation(String(valeur));
            setLastEquation(String(valeur));

        } else if (["/", "*", "-", "+"].includes(valeur)) {
            if (lastEquation !== null) {
                setEquation(lastEquation + valeur)
            } else {
                setEquation(equation + valeur)
            }

        } else if (valeur === "+-") {
            const lastNumber = equation.split(/[\+\-\*\/]/).pop()
            const newEquation = equation.substring(0, equation.length - lastEquation.length) + (-1 * parseFloat(lastNumber))
            setEquation(newEquation)
            setLastEquation(newEquation)

        } else if (valeur === "rac") {
            const currentNumber = lastEquation !== null ? parseFloat(lastEquation) : parseFloat(equation.toString())
            const sqrt = Math.sqrt(currentNumber)
            if (isNaN(sqrt)) {
                setResultat(<><span style={{color: "#db3046"}}>= invalid</span></>)
            } else {
                setResultat(<><span>{"√(" + lastEquation + ")"}<EquationVert>{" = " + String(sqrt)}</EquationVert></span></>)
                setLastEquation(String(sqrt))
            }

        } else if (valeur === "x^2") {
            const currentNumber = lastEquation !== null ? parseFloat(lastEquation) : parseFloat(equation.toString())
            const squared = Math.pow(currentNumber, 2)
            if (isNaN(squared)) {
                setEquation(<><span style={{color: "#db3046"}}>= invalid</span></>)
            } else {
                setEquation(<><span>{"(" + lastEquation + ")^2"}<EquationVert>{" = " + String(squared)}</EquationVert></span></>)
                setLastEquation(String(squared))
            }

        } else if (valeur === "1/x") {
            const currentNumber = lastEquation !== null ? parseFloat(lastEquation) : parseFloat(equation.toString())
            const inverse = 1 / currentNumber
            if (isNaN(inverse)) {
                setEquation(<><span style={{color: "#db3046"}}>= invalid</span></>)
            } else {
                setEquation(<><span>{"(1/(" + lastEquation + "))"}<EquationVert>{" = " + String(inverse)}</EquationVert></span></>)
                setLastEquation(String(inverse))
            }

        } else {
            if (lastEquation !== null) {
                setEquation(lastEquation + valeur)
            } else {
                setEquation(equation + valeur)
            }
            if (!["/", "*", "-", "+"].includes(valeur)) {
                setLastEquation(equation.toString() + valeur)
            }
        }
    }

    function egal() {
        try {
            const result = String(math.evaluate(equation));
            setEquation(<><span>{equation}<EquationVert>{" = " + result}</EquationVert></span></>);
            setLastEquation(result);
        } catch (error) {
            setEquation(<><span>{equation}<span style={{color: "#db3046"}}> = invalid</span></span></>);
        }
    }

    useEffect(() => {
        function handleOutSideClick() {
            setBoutonActive(null)
            setFuncBoutonActive(null)
        }

        const parentElement = document.getElementById("parent-element")
        parentElement.addEventListener("click", handleOutSideClick)

        return () => {
            parentElement.removeEventListener("click", handleOutSideClick)
        }
    }, [])

    return(
        <Centre id="parent-element">
            <Calculatric>
                <Resultat>{resultat || equation}</Resultat>
                <CentreBouton>
                    {func.map((valeur, index) => (
                        <BoutonFonc key={index} onClick={(event) => {fonction(valeur); handleFuncClick(index); event.stopPropagation();}} valeur={valeur} func={func} className={funcBoutonActive === index ? "bouton-clique" : ""}>{icones[valeur] || valeur}</BoutonFonc>
                    ))}
                    <CentreChiffre>
                        {chiffre.map((valeur, index) => (
                            <Bouton key={index} onClick={(event) => {calcule(valeur); handleClick(index); event.stopPropagation();}} valeur={valeur} chiffre={chiffre} className={boutonActive === index ? "bouton-clique" : ""}>{icones[valeur] || valeur}</Bouton>
                        ))}
                        <Bouton onClick={(event) => {egal(); handleClick(EGAL_BOUTON); event.stopPropagation();}} style={boutonActive === EGAL_BOUTON ? {backgroundColor: "#206bd6"} : {backgroundColor: "#be6e6a"}} className={boutonActive === EGAL_BOUTON ? "bouton-clique" : ""}>=</Bouton>
                    </CentreChiffre>
                </CentreBouton>
            </Calculatric>
        </Centre>
    )
}

export default Calculatrice