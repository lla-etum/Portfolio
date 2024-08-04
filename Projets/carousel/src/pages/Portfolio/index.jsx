import { FaAngular, FaCircle, FaCss3Alt, FaGithub, FaHourglassStart, FaHtml5, FaInstagram, FaJs, FaLaptopCode, FaPython, FaReact, FaSass, FaUpRightFromSquare, FaX } from "react-icons/fa6"
import styled, { createGlobalStyle, css, keyframes } from "styled-components"
import githubLogo from "../../image/images.png"
import { useState, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import '../../utils/trad/i18n';
import france from "../../image/Flag_of_France.png"
import uk from "../../image/Flag_of_the_United_Kingdom.png"
import photo from "../../image/WR_Infobox_Jhin.jpg"
import tictac from "../../image/tictactoe.png"
import timer from "../../image/Timer.png"
import calculator from "../../image/calculator.png"

const IntroPage = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;
    height: 95vh;
`

const IconCode = styled.span`
    font-size: 120px;
    margin-bottom: -3rem;
    color: "black";
`

const GitButton = styled.a`
    cursor: pointer;
    border-top: 0px solid transparent;
    border-left: 100px solid #181717;
    border-bottom: 100px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 1;
    right: 1;
`

const jump = keyframes`
    0%, 100% {
        transform: translateY(0) translateX(0);
    }

    50% {
        transform: translateY(-10px) translateX(-10px);
    }
`

const IconContainer = styled.div`
    &:hover {
        animation: ${jump} 0.6s linear;
    }
`

const Svgimage = styled.img`
    position: absolute;
    top: 100%;
    left: 100%;
    transform: rotate(315deg) translateX(-180%) translateY(-120%);
    width: 40px;
    height: 40px;
`

const TitreMot = styled.h2`
    font-size: 22px;
    font-weight: 100;
    margin-top: -0.5rem;
`

const BoutonToggle = styled.label`
    display: inline-block;
    overflow: hidden;
    width: 90px;
    height: 40px;
    cursor: pointer;
    position: relative;

    & input {
        position: absolute;
        top: -30px;
        left: -30px;
        width: 0;
        height: 0;
    }

    & input + span {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #b9aa83;
        border-radius: 20px;
    }

    & input:checked + span {
        background: #353535;
    }

    & input + span:before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 4px;
        width: 32px;
        height: 32px;
        background: white;
        border-radius: 50%;
        transform: translateY(-50%);
        transition: all .3s;
    }

    & input:checked + span:before {
        left: 54px;
    }

    & span {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }
`

const BoutonLang = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
`

const BoutonDrapeau = styled.button`
    border: transparent;
    background: transparent;
    cursor: pointer;
    padding-left: 1.5rem;
    &.bouton-clique {
        filter: brightness(70%);
    }
`

const Drapeau = styled.img`
    width: 55px;
    height: 40px;
    border-radius: 10px;
`

const MidPage = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 600px;
    padding-top: 2rem;
`

const PresentationBox = styled.div`
    border-top: transparent;
    padding: 1.5rem;
    border-radius: 0 0 2px 2px;
    width: 950px;
    & h3 {
        margin-bottom: 1.5rem;
    }

    & p {
        font-size: 14px;
    }
`

const InfoBox = styled.div`
    background-color: #f7f7f7;
    border-radius: 2px 2px 0 0;
    border-bottom: transparent;
    height: 30px;
    display: flex;
    align-items: center;
`

const BorderPhoto = styled.div`
    border: transparent;
    padding: 1rem;
    width: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & div {
        font-size: 50px;
        padding-top: 1rem;
        display: flex;
        flex-direction: row;
    }
`

const PhotoTaille = styled.img`
    width: auto;
    height: 300px;
`

const Arrangement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const HTMLLogo = styled.span`
    color: #e44d13;
`

const CSSLogo = styled.span`
    color: #1a78bb;
`

const JSLogo = styled.span`
    color: #eeda5c;
`

const LogoSpace = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`

const Cercle = styled.div`
    font-size: 10px;
    & span {
        margin-left: 0.5rem;
    }
`

const CercleRouge = styled.span`
    color: #ec485d;
    padding-left: 0.3rem;
`

const CercleJaune = styled.span`
    color: #fbca62;
`

const CercleVert = styled.span`
    color: #77b15f;
`

const ProjetPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 660px;
`

const TitreProjet = styled.h3`
    padding-bottom: 5rem;
`

const ProjetImage = styled.img`
    width: 320px;
    height: 160px;
`

const ProjetArr = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-bottom: 4rem;
`

const ProjetBox = styled.div`
    border: transparent;
    background-color: white;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    transition: 300ms ease-in-out;
    &:hover {
        transform: scale(1.02);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`

const ProjetTemps = styled.h3`
    border: transparent;
    border-radius: 0 0 6px 6px;
    background-color: #696969;
    color: white;
    font-size: 15px;
    margin-top: 0rem;
    padding: 0.3rem 1rem;
`

const ProjetPop = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1em;
    zIndex: 1000;
    width: 800px;
    height: 630px;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ImageProjet1 = styled.img`
    width: 600px;
    height: 350px;
`

const BordureImage = styled.div`
    border: transparent;
    padding: 0.3rem 0.3rem 0 0.3rem;
    height: auto;
    background-color: #d6caac;
    width: auto;
    margin-top: 2.5rem;
`

const TextPop = styled.div`
    width: 75%;
    margin-top: 2.5rem;
    & div {
        display: flex;
        flex-direction: row;
    }
    
    & h3 {
        font-size: 15px;
        margin-bottom: -0.2rem;
    }

    & p {
        font-size: 13px;
    }
`

const Fermer = styled.div`
    font-size: 25px;
    cursor: pointer;
    position: absolute;
    right: 0;
    margin: 0rem 1rem;
`

const LogoLang = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
    }
`

const LogoProg = styled.span`
    font-size: 35px;
    p
`

const LogoText = styled.p`
    font-size: 10px;
    margin: -0.4rem;
`

const LienPop = styled.a`
    margin-top: 0.8rem;
    margin-left: 0.5rem;
    color: black;
`

const SkillsPage = styled.div`
    background-color: #1f1f1f;
    color: white;
    height: 510px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h3 {
        margin-top: -7rem;
        font-weight: 100;
    }
`

const ArrangementProg = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5rem;
`

const BoiteLang = styled.div`
    background-color: #2a2929;
    padding: 0.5rem 1.5rem 1.2rem 1.5rem;
    margin-right: 1.3rem;
    border-radius: 10px;
`

const Experience = styled.div`
    display: flex;
    justify-content: center;
    height: 700px;
    & h3 {
        font-weight: 100;
        padding: 5rem 0;
    }
`

const BarreCentre = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const Barre = styled.div`
    height: 60vh;
    width: 4px;
    background-color: white;
    margin-bottom: 3rem;
`

const ElementBarre = styled.div`
    position: absolute;
    top: 39%;
    transform: translateY(-50%);
    & p {
        position: absolute;
        top: 10%;
        left: 120%;
        transform: translateY(-50%);
        font-size: 10px;
        width: 100px;
        color: grey;
    }
`

const CercleElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ad9354;
    border: 4px solid white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    color: white;
    font-size: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const TextBox = styled.div`
    background-color: white;
    border-radius: 5px;
    border-bottom: 3px solid #dddddd;
    position: absolute;
    top: 35%;
    right: 120%;
    padding: 1rem;
    width: 450px;
    height: 110px;
    & h4 {
        margin-bottom: -1rem;
    }
`

const ExperienceSkills = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 10px;
    flex-wrap: wrap;
`

const ExperienceBox = styled.div`
    padding: 0.3rem  0.5rem;
    background-color: #f9f5eb;
    border-radius: 20px;
    margin-right: 0.3rem;
    margin-bottom: 0.3rem;
`

const ExperienceMain = styled.div`
    background-color: #ad9354;
    border-radius: 10px;
    color: white;
    font-size: 13px;
    padding: 0.2rem 0.5rem;
    width: 90px;
    margin-bottom: -0.5rem;
`

const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid ${props => props.color || "white"};
    position: absolute;
    top: 13%;
    right: -1.5%;
`

const TriangleOuest = styled.div`
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid ${props => props.color || "white"};
    position: absolute;
    top: 15%;
    right: 100%;
`

const FooterPage = styled.div`
    height: 130px;
    background-color: #1f1f1f;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & p {
        margin-top: 1rem;
        margin-bottom: -3rem;
        font-size: 12px;
        font-weight: 100;
    }
`

const FooterArr = styled.div`
    font-size: 22px;
    & a {
        color: white;
        cursor: pointer;
        padding: 0 1rem;
    }
`

const angularKeyframe = keyframes`
    0% {
        transform: scale(0.1);
        opacity: 0;
    }
    60% {
        transform: scale(1.2);
    }
    80% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`

const MouveKeyframe = keyframes`
    0% {
        transform: translateX(-40%);
    }
    60% {
        transform: translateX(3%);
    }
    80% {
        transform: translateX(3%);
    }
    100% {
        transform: translateX(0%);
    }
`

const MouveKeyframeInverse = keyframes`
    0% {
        transform: translateX(40%);
    }
    60% {
        transform: translateX(-3%);
    }
    80% {
        transform: translateX(-3%);
    }
    100% {
        transform: translateX(0%);
    }
`

const AnimatedCercleElement1 = styled(CercleElement)`
  ${props => props.isVisible1 ? css`
    animation: ${angularKeyframe} 550ms forwards;
  ` : ''}
  background-color: ${props => props.angularFond};
  color: ${props => props.angular};
`

const AnimatedCercleElement2 = styled(CercleElement)`
  ${props => props.isVisible2 ? css`
    animation: ${angularKeyframe} 550ms forwards;
  ` : ''}
  background-color: ${props => props.angularFond};
  color: ${props => props.angular};
`

const AnimatedCercleElement3 = styled(CercleElement)`
  ${props => props.isVisible3 ? css`
    animation: ${angularKeyframe} 550ms forwards;
  ` : ''}
  background-color: ${props => props.angularFond};
  color: ${props => props.angular};
`

const AnimatedBox = styled(TextBox)`
  ${props => props.isVisible1 ? css`
    animation: ${MouveKeyframe} 550ms forwards;
  ` : ''}
  background-color: ${props => props.boxFond};
`

const AnimatedP = styled.p`
  ${props => props.isVisible1 ? css`
    animation: ${MouveKeyframe} 550ms forwards;
  ` : ''}
  color: ${props => props.datePresent};
`

const AnimatedBoxInverse = styled(TextBox)`
    ${props => props.isVisible2 ? css`
        animation: ${MouveKeyframeInverse} 550ms forwards;
    ` : ''}
    background-color: ${props => props.boxFond};
`

const AnimatedPInverse = styled.p`
    ${props => props.isVisible2 ? css`
        animation: ${MouveKeyframeInverse} 550ms forwards;
    ` : ''}
    color: ${props => props.datePresent};
`

function Portfolio() {
    const [active, setActive] = useState(false)
    const [boutonActive, setBoutonActive] = useState(true)
    const [motIndex, setMotIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [bgColor, setBgColor] = useState('white')
    const [boxColor, setBoxColor] = useState('white')
    const [traitColor, setTraitColor] = useState('#e4e4e4')
    const [borderBottom, setBorderBottom] = useState('transparent')
    const [logoM, setLogoM] = useState('black')
    const [fond, setFond] = useState("#e8d4a4")
    const [fondPro, setFondPro] = useState("#eee1bf")
    const [textCouleur, setTextCouleur] = useState('black')
    const [date, setDate] = useState('#696969')
    const [affichePop, setAffichePop] = useState(false)
    const [affichePop2, setAffichePop2] = useState(false)
    const [affichePop3, setAffichePop3] = useState(false)
    const [fondPop, setFondPop] = useState("white")
    const [onglet, setOnglet] = useState("#e8d4a4")
    const [lienClick, setLienClick] = useState("black")
    const [experience, setExperience] = useState("#eee1bf")
    const [experienceTitre, setExperienceTitre] = useState("black")
    const [angular, setAngular] = useState("white")
    const [angularFond, setAngularFond] = useState("#ac9259")
    const [datePresent, setDatePresent] = useState("grey")
    const [boxFond, setBoxFond] = useState("white")
    const [boxP, setBoxP] = useState("#f9f5eb")
    const [boxFondLang, setBoxFondLang] = useState("black")

    const GlobalStyle = createGlobalStyle`
        body {
            background-color: ${fond === "#e8d4a4" ? "#e8d4a4" : "#494949"};
        }
    `

    const [isVisible1, setIsVisible1] = useState(false)
    const ref1 = useRef()
    const [isVisible2, setIsVisible2] = useState(false)
    const ref2 = useRef()
    const [isVisible3, setIsVisible3] = useState(false)
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()

    const { t, i18n } = useTranslation("translations")

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const toggleTheme = () => {
        setFond(fond === "#e8d4a4" ? "#494949" : "#e8d4a4")
        setFondPro(fondPro === "#eee1bf" ? "#5b5b5b" : "#eee1bf")
        setTextCouleur(textCouleur === "black" ? "white" : "black")
        setLogoM(logoM === "black" ? "#3e3832" : "black")
        setBgColor(bgColor === 'white' ? '#7f7f7f' : 'white')
        setBoxColor(boxColor === 'white' ? '#6d6d6d' : 'white')
        setTraitColor(traitColor === "#e4e4e4" ? "#5f5f5f" : "#e4e4e4")
        setBorderBottom(borderBottom === 'transparent' ? `` : 'transparent')
        setDate(date === "#696969" ? "#918e97" : "#696969")
        setFondPop(fondPop === "white" ? "#5b5b5b" : "white")
        setOnglet(onglet === "#e8d4a4" ? "#8c8c8c" : "#e8d4a4")
        setLienClick(lienClick === "black" ? "white" : "black")
        setExperience(experience === "#eee1bf" ? "#494949" : "#eee1bf")
        setExperienceTitre(experienceTitre === "black" ? "#cacaca" : "black")
        setAngular(angular === "white" ? "#cccccc" : "white")
        setAngularFond(angularFond === "#ac9259" ? "#747474" : "#ac9259")
        setDatePresent(datePresent === "grey" ? "#9b9b9b" : "grey")
        setBoxFond(boxFond === "white" ? "#cccccc" : "white")
        setBoxP(boxP === "#f9f5eb" ? "#747474" : "#f9f5eb")
        setBoxFondLang(boxFondLang === "black" ? "#cccccc" : "black")
    }

    function handleClickEn() {
        setActive(true)
        setBoutonActive(false)
    }
    function handleClickFr() {
        setActive(false)
        setBoutonActive(true)
    }

    const togglePop = () => {
        setAffichePop(!affichePop)
    }

    const togglePop2 = () => {
        setAffichePop2(!affichePop2)
    }

    const togglePop3 = () => {
        setAffichePop3(!affichePop3)
    }

    const mots = [t('DÉBUTANT'), t('INTÉGRATEUR WEB'), t('DÉVELOPPEUR FRONT-END')]

    useEffect(() => {
        if (affichePop) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [affichePop])

    useEffect(() => {
        setMotIndex(0)
        setCharIndex(0)
        setDisplayText("")
        setIsDeleting(false)
    }, [i18n.language])

    useEffect(() => {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => {
            if (isDeleting) {
              if (charIndex > 0) {
                setCharIndex(charIndex - 1);
                return prev.slice(0, -1);
              } else {
                setIsDeleting(false);
                setMotIndex((motIndex + 1) % mots.length);
                return '';
              }
            } else {
              if (charIndex < mots[motIndex].length) {
                setCharIndex(charIndex + 1);
                return prev + mots[motIndex][charIndex];
              } else {
                if (prev === mots[motIndex]) {
                    setIsDeleting(true);
                }
                return prev;
              }
            }
          });
        }, isDeleting ? 70 : (displayText === mots[motIndex] ? 2000 : 70));
    
        return () => clearTimeout(timeout);
    }, [motIndex, charIndex, isDeleting, displayText]);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible1(entry.isIntersecting),
          { threshold: 0.1 }
        );
        if (ref1.current) {
          observer.observe(ref1.current);
        }
        return () => {
          if (ref1.current) {
            observer.unobserve(ref1.current);
          }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible1(entry.isIntersecting),
          { threshold: 0.1 }
        );
        if (ref2.current) {
          observer.observe(ref2.current);
        }
        return () => {
          if (ref2.current) {
            observer.unobserve(ref2.current);
          }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible2(entry.isIntersecting),
          { threshold: 0.1 }
        );
        if (ref3.current) {
          observer.observe(ref3.current);
        }
        return () => {
          if (ref3.current) {
            observer.unobserve(ref3.current);
          }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible2(entry.isIntersecting),
          { threshold: 0.1 }
        );
        if (ref4.current) {
          observer.observe(ref4.current);
        }
        return () => {
          if (ref4.current) {
            observer.unobserve(ref4.current);
          }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible3(entry.isIntersecting),
          { threshold: 0.1 }
        );
        if (ref5.current) {
          observer.observe(ref5.current);
        }
        return () => {
          if (ref5.current) {
            observer.unobserve(ref5.current);
          }
        };
    }, []);

    return(
        <div>
            <GlobalStyle />
            <IntroPage style={{backgroundColor: fond, color: textCouleur}}>
                <GitButton href="https://github.com/lla-etum" target="_blank">
                    <IconContainer>
                        <Svgimage src={githubLogo} alt="Logo GitHub" />
                    </IconContainer>
                </GitButton>
                <IconCode style={{color: logoM}}><FaLaptopCode /></IconCode>
                <h1>Christian J</h1>
                <TitreMot>{displayText}&nbsp;</TitreMot>
                <BoutonToggle>
                    <input type="checkbox" onChange={() => toggleTheme()} />
                    <span>☀️&nbsp;&nbsp;&nbsp;&nbsp;🦉</span>
                </BoutonToggle>
                <BoutonLang>
                    <BoutonDrapeau onClick={() => {changeLanguage("en"); handleClickEn();}} className={active ? "bouton-clique" : ""}>
                        <Drapeau src={uk} alt="Anglais" />
                    </BoutonDrapeau>
                    
                    <BoutonDrapeau onClick={() => {changeLanguage("fr"); handleClickFr();}} className={boutonActive ? "bouton-clique" : ""}>
                        <Drapeau src={france} alt="Français" />
                    </BoutonDrapeau>
                </BoutonLang>
            </IntroPage>

            <MidPage style={{backgroundColor: bgColor, color: textCouleur}}>
                <h3>{t('A PROPOS DE MOI')}</h3>
                <Arrangement>
                    <BorderPhoto style={{ backgroundColor: boxColor }}>
                        <PhotoTaille src={photo} alt="Photo de moi :)" />
                        <LogoSpace>
                            <HTMLLogo><FaHtml5 /></HTMLLogo><CSSLogo><FaCss3Alt /></CSSLogo><JSLogo><FaJs /></JSLogo>
                        </LogoSpace>
                    </BorderPhoto>
                    <div>
                        <InfoBox style={{ backgroundColor: boxColor, border: `1px solid ${traitColor}`, borderBottom: borderBottom}}>
                            <Cercle>
                                <CercleRouge><FaCircle /></CercleRouge><CercleJaune><FaCircle /></CercleJaune><CercleVert><FaCircle /></CercleVert>
                            </Cercle>
                        </InfoBox>
                        <PresentationBox style={{ backgroundColor: boxColor, border: `1px solid ${traitColor}`}}>
                            <h3>{t('Salut :)')}</h3>
                            <p>
                            {t("👋 Je m'appelle Christian J. Je suis un débutant sur React. Ce que vous voyez est un template de Dorota1997. Si vous aimez ce template , cliquez sur ⭐ du dépôt afin que ça soit vu par d'autres utilisateurs. Merci 💜")}
                            </p>
                        </PresentationBox>
                    </div>
                </Arrangement>
            </MidPage>

            <ProjetPage style={{backgroundColor: fondPro, color: textCouleur}}>
                <TitreProjet>{t("PROJETS")}</TitreProjet>
                <ProjetArr>
                    <ProjetBox onClick={togglePop} style={{backgroundColor: boxColor}}>
                        <ProjetImage src={tictac} alt="Tic Tac Toe" />
                        <ProjetTemps style={{backgroundColor: date}}>2024</ProjetTemps>
                        <h3>Tic Tac Toe</h3>
                    </ProjetBox>
                    {affichePop && (
                        <Overlay onClick={togglePop}>
                            <ProjetPop onClick={e => e.stopPropagation()} style={{backgroundColor: fondPop}}>
                                <Fermer onClick={togglePop}>
                                    <FaX />
                                </Fermer>
                                <BordureImage style={{backgroundColor: onglet}}>
                                    <Cercle style={{margin: "0.5rem -0.8rem"}}>
                                        <CercleRouge><FaCircle /></CercleRouge><CercleJaune><FaCircle /></CercleJaune><CercleVert><FaCircle /></CercleVert>
                                    </Cercle>
                                    <ImageProjet1 src={tictac} alt="image tic tac toe" />
                                </BordureImage>
                                <TextPop>
                                    <div>
                                        <h3>Tic Tac Toe</h3>
                                        <LienPop href="/tictactoe" target="_blank" style={{color: lienClick}}><FaUpRightFromSquare /></LienPop>
                                    </div>
                                    <p>{t("Le Tic Tac Toe est un jeu de stratégie simple joué sur une grille de 3x3. Deux joueurs, l’un avec le symbole ‘X’ et l’autre avec ‘O’, placent alternativement leur symbole sur la grille. Le premier à aligner trois de ses symboles horizontalement, verticalement ou en diagonale gagne.")}</p>
                                </TextPop>
                                <LogoLang>
                                    <div>
                                        <LogoProg><FaHtml5 /></LogoProg>
                                        <LogoText>HTML</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaCss3Alt /></LogoProg>
                                        <LogoText>CSS</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaJs /></LogoProg>
                                        <LogoText>JavaScript</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaReact /></LogoProg>
                                        <LogoText>React</LogoText>
                                    </div>
                                </LogoLang>
                            </ProjetPop>
                        </Overlay>
                    )}
                    <ProjetBox onClick={togglePop2} style={{backgroundColor: boxColor}}>
                        <ProjetImage src={timer} alt="Timer" />
                        <ProjetTemps style={{backgroundColor: date}}>2024</ProjetTemps>
                        <h3>Timer</h3>
                    </ProjetBox>
                    {affichePop2 && (
                        <Overlay onClick={togglePop2}>
                            <ProjetPop onClick={e => e.stopPropagation()} style={{backgroundColor: fondPop}}>
                                <Fermer onClick={togglePop2}>
                                    <FaX />
                                </Fermer>
                                <BordureImage style={{backgroundColor: onglet}}>
                                    <Cercle style={{margin: "0.5rem -0.8rem"}}>
                                        <CercleRouge><FaCircle /></CercleRouge><CercleJaune><FaCircle /></CercleJaune><CercleVert><FaCircle /></CercleVert>
                                    </Cercle>
                                    <ImageProjet1 src={timer} alt="image timer" />
                                </BordureImage>
                                <TextPop>
                                    <div>
                                        <h3>Timer</h3>
                                        <LienPop href="/stopwatch" target="_blank" style={{color: lienClick}}><FaUpRightFromSquare /></LienPop>
                                    </div>
                                    <p>{t("Un chronomètre est un instrument de mesure du temps qui permet de mesurer la durée écoulée à partir d’un instant donné. Il est souvent utilisé dans diverses activités nécessitant une mesure précise du temps, comme les sports, les tests, les expériences scientifiques, etc.")}</p>
                                </TextPop>
                                <LogoLang>
                                    <div>
                                        <LogoProg><FaHtml5 /></LogoProg>
                                        <LogoText>HTML</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaCss3Alt /></LogoProg>
                                        <LogoText>CSS</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaJs /></LogoProg>
                                        <LogoText>JavaScript</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaReact /></LogoProg>
                                        <LogoText>React</LogoText>
                                    </div>
                                </LogoLang>
                            </ProjetPop>
                        </Overlay>
                    )}
                    <ProjetBox onClick={togglePop3} style={{backgroundColor: boxColor}}>
                        <ProjetImage src={calculator} alt="Calculator" />
                        <ProjetTemps style={{backgroundColor: date}}>2024</ProjetTemps>
                        <h3>Calculator</h3>
                    </ProjetBox>
                    {affichePop3 && (
                        <Overlay onClick={togglePop3}>
                            <ProjetPop onClick={e => e.stopPropagation()} style={{backgroundColor: fondPop}}>
                                <Fermer onClick={togglePop3}>
                                    <FaX />
                                </Fermer>
                                <BordureImage style={{backgroundColor: onglet}}>
                                    <Cercle style={{margin: "0.5rem -0.8rem"}}>
                                        <CercleRouge><FaCircle /></CercleRouge><CercleJaune><FaCircle /></CercleJaune><CercleVert><FaCircle /></CercleVert>
                                    </Cercle>
                                    <ImageProjet1 src={calculator} alt="image calculator" />
                                </BordureImage>
                                <TextPop>
                                    <div>
                                        <h3>Calculator</h3>
                                        <LienPop href="/calculator" target="_blank" style={{color: lienClick}}><FaUpRightFromSquare /></LienPop>
                                    </div>
                                    <p>{t("Une calculatrice est un appareil utilisé pour effectuer des calculs mathématiques. Les calculatrices peuvent être physiques ou numériques, et elles peuvent effectuer une variété de calculs, allant des opérations arithmétiques de base comme l’addition, la soustraction, la multiplication et la division, aux calculs plus complexes comme les fonctions trigonométriques, les logarithmes, et plus encore.")}</p>
                                </TextPop>
                                <LogoLang>
                                    <div>
                                        <LogoProg><FaHtml5 /></LogoProg>
                                        <LogoText>HTML</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaCss3Alt /></LogoProg>
                                        <LogoText>CSS</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaJs /></LogoProg>
                                        <LogoText>JavaScript</LogoText>
                                    </div>
                                    <div>
                                        <LogoProg><FaReact /></LogoProg>
                                        <LogoText>React</LogoText>
                                    </div>
                                </LogoLang>
                            </ProjetPop>
                        </Overlay>
                    )}
                </ProjetArr>
            </ProjetPage>

            <SkillsPage>
                <h3>{t("COMPÉTENCES")}</h3>
                <ArrangementProg>
                    <BoiteLang>
                        <LogoProg style={{fontSize: "45px"}}><FaHtml5 /></LogoProg>
                        <LogoText style={{fontSize: "14px", textAlign: "center"}}>HTML 5</LogoText>
                    </BoiteLang>
                    <BoiteLang>
                        <LogoProg style={{fontSize: "45px"}}><FaCss3Alt /></LogoProg>
                        <LogoText style={{fontSize: "14px", textAlign: "center"}}>CSS 3</LogoText>
                    </BoiteLang>
                    <BoiteLang>
                        <LogoProg style={{fontSize: "45px"}}><FaJs /></LogoProg>
                        <LogoText style={{fontSize: "14px", textAlign: "center"}}>JavaScript</LogoText>
                    </BoiteLang>
                    <BoiteLang>
                        <LogoProg style={{fontSize: "45px"}}><FaReact /></LogoProg>
                        <LogoText style={{fontSize: "14px", textAlign: "center"}}>React</LogoText>
                    </BoiteLang>
                    <BoiteLang>
                        <LogoProg style={{fontSize: "45px"}}><FaSass /></LogoProg>
                        <LogoText style={{fontSize: "14px", textAlign: "center"}}>SASS</LogoText>
                    </BoiteLang>
                    <BoiteLang>
                        <LogoProg style={{fontSize: "45px"}}><FaPython /></LogoProg>
                        <LogoText style={{fontSize: "14px", textAlign: "center"}}>Python</LogoText>
                    </BoiteLang>
                </ArrangementProg>
            </SkillsPage>

            <Experience style={{backgroundColor: experience}}>
                <BarreCentre>
                    <h3 style={{color: experienceTitre}}>{t("EXPÉRIENCE")}</h3>
                    <Barre />
                    <ElementBarre>
                        <div ref={ref1}>
                            <AnimatedCercleElement1 isVisible1={isVisible1} angular={angular} angularFond={angularFond}>
                                <FaAngular />
                            </AnimatedCercleElement1>
                            <AnimatedP isVisible1={isVisible1} datePresent={datePresent}>09.2022 - present</AnimatedP>
                        </div>
                    </ElementBarre>
                    <div ref={ref2}>
                        <AnimatedBox isVisible1={isVisible1} boxFond={boxFond}>
                            <ExperienceMain style={{backgroundColor: angularFond, color: boxFond, width: "33px"}}>
                                React
                            </ExperienceMain>
                            <h4>{t('Intégrateur Web')}</h4>
                            <p>{t('Débutant')}</p>
                            <ExperienceSkills>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    REST API
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    HTML
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    CSS
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    JavaScript
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    React
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    Sass
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    Git
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    GitHub
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    SEO
                                </ExperienceBox>
                            </ExperienceSkills>
                            <Triangle color={boxFond} />
                        </AnimatedBox>
                    </div>
                    <ElementBarre style={{top: "67%"}}>
                        <div ref={ref3}>
                            <AnimatedCercleElement2 isVisible2={isVisible2} angular={angular} angularFond={angularFond}>
                                <FaAngular />
                            </AnimatedCercleElement2>
                            <AnimatedPInverse isVisible2={isVisible2} datePresent={datePresent} style={{left: "-140%"}}>09.2020 - 07.2022</AnimatedPInverse>
                        </div>
                    </ElementBarre>
                    <div ref={ref4}>
                        <AnimatedBoxInverse isVisible2={isVisible2} boxFond={boxFond} style={{top: "63%", right: "-510%", height: "110px"}}>
                            <ExperienceMain style={{width: "40px", backgroundColor: angularFond, color: boxFond}}>
                                Python
                            </ExperienceMain>
                            <h4>{t('Lycée')}</h4>
                            <p>{t('Numérique et Sciences Informatiques')}</p>
                            <ExperienceSkills>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    Python
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    SQL
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    HTML
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    CSS
                                </ExperienceBox>
                                <ExperienceBox style={{backgroundColor: boxP, color: boxFondLang}}>
                                    JavaScript
                                </ExperienceBox>
                            </ExperienceSkills>
                            <TriangleOuest color={boxFond}/>
                        </AnimatedBoxInverse>
                    </div>
                    <ElementBarre style={{top: "91%"}}>
                        <div ref={ref5}>
                            <AnimatedCercleElement3 isVisible3={isVisible3} angular={angular} angularFond={angularFond}>
                                <FaHourglassStart />
                            </AnimatedCercleElement3>
                        </div>
                    </ElementBarre>
                </BarreCentre>
            </Experience>

            <FooterPage>
                <FooterArr>
                    <a href="https://github.com/"><FaGithub /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                </FooterArr>
                <p>Copyright &copy; Christian J</p>
            </FooterPage>
        </div>
    )
}

export default Portfolio