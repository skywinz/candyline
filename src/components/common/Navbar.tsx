'use client';

import styled from 'styled-components';
import Sidebar from '@/components/common/Sidebar';
import {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import ThemeSelector from '@/components/common/ThemeSelector';
import {useRouter} from 'next/navigation';
import useDefaultPadding from '@/hooks/useDefaultPadding';

const Navbar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const {defaultPaddingLeftRightValue} = useDefaultPadding();
    const router = useRouter();

    return (
        <header>
            <NavbarLayout
                style={{
                    paddingLeft: `${defaultPaddingLeftRightValue}px`,
                    paddingRight: `${defaultPaddingLeftRightValue}px`
            }}>
                <ContentContainer>
                    <MenuIconContainer size={28} onClick={() => setIsSidebarVisible(!isSidebarVisible)} />
                    <Category onClick={() => router.push('/')}>Angeline</Category>
                    <ThemeSelector extendedStyle={{marginTop: "12px"}}/>
                </ContentContainer>
            </NavbarLayout>
            <Sidebar isVisible={isSidebarVisible} setIsVisible={setIsSidebarVisible} />
        </header>
    );
}

export default Navbar;

const NavbarLayout = styled.div`
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  
    background-color: ${(props) => props.theme.main.navbar.backgroundColor};
    border-bottom: 2px solid ${(props) => props.theme.main.navbar.borderBottomColor};
    height: 60px;
    box-shadow: 0 1px 15px ${(props) => props.theme.main.navbar.shadowColor};
    font-size: 1.2em;
  
    transition: background-color 0.5s ease, border-bottom-color 0.5s ease;
  
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
    color: ${(props) => props.theme.main.navbar.menuIconColor};
`;
