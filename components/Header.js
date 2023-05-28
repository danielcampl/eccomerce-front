import Link from "next/link";
import styled from "styled-components";
import Image from 'next/image';

import Center from "./Center";

const Section = styled.header`
  background-color: #222;
  padding: 20px 10px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  .nav-text{
    text-decoration: none;
    color: #adb5bd;

    &:hover{
      color: #FFF;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #FFF;
  margin-left: 70px;
`;

const Img = styled(Image)`
  border-radius: 30px;
`;


export default function Header() {
  return (
    <Section>
      <Center>
        <Wrapper>
          <Logo href={'/'}>
            <Img
              src="/images/crocobile2.png"
              width={120}
              height={140}
              alt="GADGETS"
            />
          </Logo>
          <Nav>
            <Link href={'/'} className="nav-text">Início</Link>
            <Link href={'/products'} className="nav-text">Produtos</Link>
            <Link href={'/categories'} className="nav-text">Categorias</Link>
            <Link href={'/account'} className="nav-text">Logar</Link>
            <Link href={'/cart'} className="nav-text">Carrinho (0)</Link>
          </Nav>
        </Wrapper>
      </Center>
    </Section>
  );
}