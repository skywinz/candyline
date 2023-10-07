import styled from 'styled-components';
import {navbarPadding} from '@/styles/constants';
import Link from 'next/link';

const Navbar = () => {
    const navbarTestStyle = {
        textDecoration: 'none',
    }

    return (
        <Layout>
            <CategoryContainer>
                <Link href='/' style={navbarTestStyle}>
                    <Category>HOME</Category>
                </Link>
                <Link href='/posts' style={navbarTestStyle}>
                    <Category>POSTS</Category>
                </Link>
                <Link href='/series' style={navbarTestStyle}>
                    <Category>SERIES</Category>
                </Link>
            </CategoryContainer>
        </Layout>
    );
}

export default Navbar;

const Layout = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  background-color: ${(props) => props.theme.main.navbar.backgroundColor};
  border-bottom: 2px solid ${(props) => props.theme.main.navbar.borderBottomColor};
  height: 60px;
  padding: ${navbarPadding};
  box-shadow: 0 1px 15px gray;
`;

const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  
  font-family: 'Do Hyeon', sans-serif;
  font-size: 1.05em;
`;

const Category = styled.p`
    cursor: pointer;
    transition: color 0.3s;
    text-align: center;
    text-decoration-line: none;
    color: ${(props) => props.theme.main.navbar.fontColor};
  
    &:hover {
        color: ${(props) => props.theme.main.navbar.itemColorHovered};
    }
`;