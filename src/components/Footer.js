import styled from 'styled-components';



export default function Footer(props) {


    return (
        <>
        <FooterDiv>
            {props.completed}/8 Concluídos
            </FooterDiv>
        </>


    );


}

const FooterDiv = styled.div`
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px 0px 20px 0px;

`



