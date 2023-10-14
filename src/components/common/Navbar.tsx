'use client';

import styled from 'styled-components';
import {LENGTH_FHD, LENGTH_MOBILE, NAVBAR_PADDING} from '@/styles/constants';
import Sidebar from '@/components/common/Sidebar';
import {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import ThemeSelector from '@/components/common/ThemeSelector';
import {useRouter} from 'next/navigation';

const Navbar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const router = useRouter();

    return (
        <header>
            <NavbarLayout>
                <MenuIconContainer size={28} onClick={() => setIsSidebarVisible(!isSidebarVisible)} />
                <Category onClick={() => router.push('/')}>SkyWINZ</Category>
                <ThemeSelector extendedStyle={{marginTop: "12px"}}/>
            </NavbarLayout>
            <Sidebar isVisible={isSidebarVisible} setIsVisible={setIsSidebarVisible} />
        </header>
    );
}

export default Navbar;

const NavbarLayout = styled.div`
    display: flex;
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
  
    background-color: ${(props) => props.theme.main.navbar.backgroundColor};
    border-bottom: 2px solid ${(props) => props.theme.main.navbar.borderBottomColor};
    height: 60px;
    padding: ${NAVBAR_PADDING.OVER_QHD};
    box-shadow: 0 1px 15px ${(props) => props.theme.main.navbar.shadowColor};
    font-size: 1.2em;
  
    transition: background-color 0.5s ease, border-bottom-color 0.5s ease;
  
    @media (max-width: ${LENGTH_FHD}px) {
        padding: ${NAVBAR_PADDING.FHD};
    }
    @media (max-width: ${LENGTH_MOBILE}px) {
        padding: ${NAVBAR_PADDING.MOBILE};
    }
`;


const Category = styled.p`
    font-family: 'Do Hyeon', sans-serif;
    font-size: 1.05em;
    cursor: pointer;  
    transition: color 0.5s ease;
    text-decoration-line: none;
    color: ${(props) => props.theme.main.navbar.fontColor};
    margin-top: 16px;
    
    &:hover {
        color: ${(props) => props.theme.main.navbar.itemColorHovered};
    }
`;

const MenuIconContainer = styled(AiOutlineMenu)`
    margin-top: 15px;
    cursor: pointer;
`;
