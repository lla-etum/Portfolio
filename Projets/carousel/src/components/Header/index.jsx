import { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
 
const HautPage = styled.nav`
    display: flex;
    justify-content: center;
`

const PageEspace = styled(Link)`
    padding: 15px;
    text-decoration: none;
    font-size: 18px;
    &:link, &:visited {
        color: blue;
    }
`

const BoutonT = styled.button`
    border: transparent;
    background-color: transparent;
    font-size: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.8rem;
    cursor: pointer;
    transition: 400ms;
    &:hover {
        transform: scale(1.2);
    }
`

const ConteneurBouton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`

const ConteneurInvisible = styled.div`
    height: 50px;
    visibility: hidden;
`

function Header() {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
    }

    return (
        <div>
            {open ? (
                <div>
                    <HautPage>
                        <PageEspace to="/">Accueil</PageEspace>
                        <PageEspace to="/carousel">Carousel</PageEspace>
                        <PageEspace to="/faq">FAQ</PageEspace>
                        <PageEspace to="/quote">Quote</PageEspace>
                        <PageEspace to="/shopping">Shopping</PageEspace>
                        <PageEspace to="/github">GitHub</PageEspace>
                        <PageEspace to="/video">Video</PageEspace>
                        <PageEspace to="/bmi">BMI</PageEspace>
                        <PageEspace to="/tictactoe">Tic-Tac-Toe</PageEspace>
                        <PageEspace to="/stopwatch">Stopwatch</PageEspace>
                        <PageEspace to="/calculator">Calculator</PageEspace>
                        <PageEspace to="/portfolio">Portfolio</PageEspace>
                    </HautPage>
                </div>
            ) : (
                <ConteneurInvisible />
            )}
            <ConteneurBouton>
                <BoutonT onClick={() => handleClick()}><FaBars /></BoutonT>
            </ConteneurBouton>
        </div>
    )
}

export default Header