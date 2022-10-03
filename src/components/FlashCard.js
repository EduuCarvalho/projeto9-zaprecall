import styled from 'styled-components';
import imgPlay from '../assets/img/seta_play.png'
import greenImg from '../assets/img/icone_certo.png'
import orangeImg from '../assets/img/icone_quase.png'
import redImg from '../assets/img/icone_erro.png'
import imgQuestion from '../assets/img/seta_virar.png'
import { useState } from 'react'




export default function FlashCard(props) {

    const [checkImg, setCheckImg] = useState(imgPlay);


    function showQuestion(index) {
        props.setOpenCard([]);
        props.setOpenCard([index]);

    }

    function showAnswer(index) {
        props.setOpenAnswer([]);
        props.setOpenAnswer([index])

    }


    function chooseGreenOption(index) {

        setCheckImg(greenImg);
        props.setGreenColor([...props.greenColor, index]);
        props.setCheckQuestion([...props.checkQuestion, index]);
        props.setCompleted(props.checkQuestion.length + 1);
        props.setOpenCard([]);

    }

    function chooseOrangeOption(index) {

        setCheckImg(orangeImg);
        props.setOrangeColor([...props.orangeColor, index]);
        props.setCheckQuestion([...props.checkQuestion, index]);
        props.setCompleted(props.checkQuestion.length + 1);
        props.setOpenCard([]);

    }

    function chooseRedOption(index) {

        setCheckImg(redImg);
        props.setRedColor([...props.redColor, index]);
        props.setCheckQuestion([...props.checkQuestion, index]);
        props.setCompleted(props.checkQuestion.length + 1);
        props.setOpenCard([]);
    }

    return (

        <>
            {
                props.openCard.includes(props.index) ?

                    props.openAnswer.includes(props.index) ?

                        //RESPOSTA
                        <PerguntaAberta > {props.item.answer}

                            <ContainerBotoes>
                                <ZapBotoes onClick={() => chooseRedOption(props.index)} color="#FF3030">
                                    Não lembrei
                                </ZapBotoes>
                                <ZapBotoes onClick={() => chooseOrangeOption(props.index)} color="#FF922E">
                                    Quase não lembrei
                                </ZapBotoes>
                                <ZapBotoes onClick={() => chooseGreenOption(props.index)} color="#2FBE34">
                                    Zap!
                                </ZapBotoes>
                            </ContainerBotoes>
                        </PerguntaAberta>



                        :
                        //PERGUNTA
                        <PerguntaAberta > {props.item.question}
                            <img onClick={() => showAnswer(props.index)} src={imgQuestion} alt="ShowAnswer" />
                        </PerguntaAberta>


                    :
                    //QUESTÃO
                    <PerguntaFechada index={props.index} checkQuestion={props.checkQuestion} greenColor={props.greenColor} orangeColor={props.orangeColor} redColor={props.redColor}>

                        <p> Pergunta {props.index + 1}</p>
                        <img onClick={() => showQuestion(props.index)} src={checkImg} alt="play" />
                    </PerguntaFechada>

            }


        </>


    )
}



const PerguntaFechada = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
text-decoration:${props => props.checkQuestion.includes(props.index) ? "line-through" : "none"};

p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.greenColor.includes(props.index) ? "#2FBE34" : props.orangeColor.includes(props.index) ? "#FF922E" : props.redColor.includes(props.index) ? "#FF3030" : "#333333"};
    //color: #333333;
}

`

const PerguntaAberta = styled.div`

    width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
      position: absolute;
      bottom: 10px;
      right: 10px;
  }
`

const ContainerBotoes = styled.div`
  display:flex;
  justify-content: center;
  position: absolute;
  bottom:0px;
 
  

`

const ZapBotoes = styled.button`

    width: 85.17px;
    height: 37.17px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color:#FFFFD4;
    line-height: 14px;
    margin: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color:${props => props.color};
    border:none;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
`


