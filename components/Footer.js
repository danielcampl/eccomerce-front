import styled from "styled-components";
import Center from "./Center";

const Div = styled.div`
  margin: 0;
  padding: 50px 0;
  background-color: #222;
  color: #FFF;
  padding-left: 100px;
`;

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
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

const Socials = styled.div`
  display: flex;
  align-items: center;

  .home-socials-about{
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: #D9FD54;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
  color: #adb5bd;
`;

const Paragraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 300;
  color: #adb5bd;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export default function Footer() {
    return (
        <Div>
            <Center>
                <Wrapper>
                    <Column>
                        <Socials>
                            <Item>
                                <Img src="/icons/instagram.png" />
                                <span>@crocobile</span>
                            </Item>
                            <Item>
                                <Img src="/icons/whatsapp.png" />
                                <span>(00) 00000-0000</span>
                            </Item>
                        </Socials>
                    </Column>
                    <Column>
                        <Paragraph>© 2023 Daniel Campelo. All Rights Reserved.</Paragraph>
                    </Column>
                </Wrapper>
            </Center>
        </Div>
    );
}