import styled from 'styled-components';
import DECK from "../mock";
import FlashCard from './FlashCard';
import Logo from './Logo';
import { useState } from 'react';
import circuloImg from '../assets/img/circulo_vazio.png';
import Footer from './Footer';


export default function App() {

    const [openCard, setOpenCard] = useState([]);
    const [openAnswer, setOpenAnswer] = useState([]);
    const [checkQuestion, setCheckQuestion] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [redColor, setRedColor] = useState([]);
    const [orangeColor, setOrangeColor] = useState([]);
    const [greenColor, setGreenColor] = useState([]);
    const [footerResult, setFooterResult] = useState([circuloImg, circuloImg, circuloImg, circuloImg, circuloImg, circuloImg, circuloImg, circuloImg]);

console.log("array verde",greenColor)

    return (
        <>
            <ScreenContainer>
                <Logo />

                {DECK.map((item, index) =>
                    <FlashCard
                        item={item}
                        key={index}
                        index={index}
                        openCard={openCard}
                        setOpenCard={setOpenCard}
                        openAnswer={openAnswer}
                        setOpenAnswer={setOpenAnswer}
                        checkQuestion={checkQuestion}
                        setCheckQuestion={setCheckQuestion}
                        completed={completed}
                        setCompleted={setCompleted}
                        redColor={redColor}
                        setRedColor={setRedColor}
                        orangeColor={orangeColor}
                        setOrangeColor={setOrangeColor}
                        greenColor={greenColor}
                        setGreenColor={setGreenColor}
                        footerResult={footerResult}
                        setFooterResult={setFooterResult}
                    />)}
           

            {footerResult.map((item, index) =>
                <Footer
                    index={index}
                    key={index}
                    item={item}
                    footerResult={footerResult}
                    setFooterResult={setFooterResult}
                    completed={completed}
                    setCompleted={setCompleted}
                    redColor={redColor}
                    setRedColor={setRedColor}
                    orangeColor={orangeColor}
                    setOrangeColor={setOrangeColor}
                    greenColor={greenColor}
                    setGreenColor={setGreenColor}
                />)}

                </ScreenContainer>
        </>
    );
}


const ScreenContainer = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`








