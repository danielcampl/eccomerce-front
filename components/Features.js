import styled from "styled-components";

import Center from "./Center";

const Div = styled.div`
  margin: 0;
  padding: 50px 0;
  background-color: #222;
`;

const Title = styled.h1`
  color: #FFF;
  font-weight: normal;
  font-size: 36px;
`;

const Description = styled.p`
  color: #adb5bd;
  font-size: .8rem;
  font-weight: 300;
`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 150px;
  padding-left: 100px;

  img{
    max-width: 250px;
    padding-left: 100px;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;

  .cart-icon{
    width: 25px;
    height: 25px;
  }
`;

export default function Features() {
  return (
    <Div>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Pro Anywhere</Title>
              <Description>
                Os modelos de iPhone funcionam em praticamente todo o mundo.
                Não importa se você é cliente de uma operadora de rede GSM
                ou CDMA, você pode fazer roaming usando as redes GSM
                disponíveis em mais de 200 países ou regiões.
              </Description>
              <Container>
                <Button
                  type="button"
                  className="white-btn"
                >
                  Ler Mais
                </Button>
                <Button
                  type="button"
                  className="green-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cart-icon">
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                  Adicionar ao Carrinho
                </Button>
              </Container>
            </div>
          </Column>
          <Column>
            <img
              src="https://danielcampl-ecommerce.s3.amazonaws.com/1685215687861.png"
              alt="features"
            />
          </Column>
        </Wrapper>
      </Center>
    </Div>
  );
}