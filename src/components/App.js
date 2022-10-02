import styled from 'styled-components';
import DECK from "../mock";
import FlashCard from './FlashCard';
import Logo from './Logo';



export default function App() {

    console.log("DEACK",DECK)
    return (
        <>
            <ScreenContainer>
                <Logo/>
                <FlashCard deck={DECK}/>
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








