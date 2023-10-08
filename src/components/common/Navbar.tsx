import styled from 'styled-components';
import {LENGTH_FHD, LENGTH_MOBILE, NAVBAR_PADDING} from '@/styles/constants';
import Link from 'next/link';
import {STYLE_LINK} from '@/constants/styles';

const Navbar = () => {
    return (
        <Layout>
            <CategoryContainer>
                <Link href='/' style={STYLE_LINK}>
                    <Category>HOME</Category>
                </Link>
                <Link href='/posts' style={STYLE_LINK}>
                    <Category>POSTS</Category>
                </Link>
                <Link href='/series' style={STYLE_LINK}>
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
    padding: ${NAVBAR_PADDING.OVER_QHD};
    box-shadow: 0 1px 15px gray;
    font-size: 1.2em;
  
    @media (max-width: ${LENGTH_FHD}px) {
        padding: ${NAVBAR_PADDING.FHD};
    }
    @media (max-width: ${LENGTH_MOBILE}px) {
        padding: ${NAVBAR_PADDING.MOBILE};
    }
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
