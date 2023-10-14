'use client';

import styled from 'styled-components';
import Link from 'next/link';
import {AiOutlineClose} from 'react-icons/ai';
import {SIDEBAR_MOVE_TIME} from '@/styles/constants';
import {useRouter} from 'next/navigation';
import {useState} from 'react';


interface SidebarArgs {
    isVisible: boolean;
    setIsVisible: (value: (((prevState: boolean) => boolean) | boolean)) => void;
}


const Sidebar = ({isVisible, setIsVisible}: SidebarArgs) => {
    const [searchWord, setSearchWord] = useState('');
    const router  = useRouter();

    const searchButtonHandler = () => {
        // TODO 개션 필요
        // router.push(`/posts?word=${searchWord}`);
        window.location.href = `/posts?word=${searchWord}`;
    }

    return (
        <Main>
            <div className={`parent-layout${isVisible ? '-visible' : ''}`}>
                <div className={`layout${isVisible ? '-visible' : ''}`}>
                    <div className='close'>
                        <AiOutlineClose
                            onClick={() => setIsVisible(false)}
                            size={24}
                        />
                    </div>
                    <Link href='/' style={{textDecoration: 'none'}}><h2>홈</h2></Link>
                    <Link href='/posts' style={{textDecoration: 'none'}}><h2>포스트</h2></Link>
                    <Link href='/series' style={{textDecoration: 'none'}}><h2>시리즈</h2></Link>
                    <div className='post-form'>
                        <input
                            type='text'
                            placeholder='검색어를 입력하세요'
                            className={`post-search post-search${isVisible ? '-visible' : '-invisible'}`}
                            onChange={(e) => setSearchWord(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.code === 'Enter') {
                                    searchButtonHandler();
                                }
                            }}
                        />
                        <button className='search-button' onClick={searchButtonHandler}>GO</button>
                    </div>
                </div>
            </div>
        </Main>
    );
}

const Main = styled.div`
    .close {
        float: right;
        margin-top: -80px;
        cursor: pointer;
        margin-right: 30px;
    }
    .parent-layout {
        position: fixed;
        z-index: 10000;
        margin-top: -200px;
        margin-left: -4px;
        width: 0;
        height: 100%;
        background-color: ${(props) => props.theme.main.sidebar.backgroundColor};
        border-right: 3px solid ${(props) => props.theme.main.sidebar.borderColor};
        padding: 240px 0 80px 0;
        transition: width ${SIDEBAR_MOVE_TIME}s, padding ${SIDEBAR_MOVE_TIME}s;
    }
    .parent-layout-visible {
        position: fixed;
        z-index: 10000;
        margin-top: -200px;
        width: 200px;
        height: 100%;
        background-color: ${(props) => props.theme.main.sidebar.backgroundColor};
        border-right: 3px solid ${(props) => props.theme.main.sidebar.borderColor};
        padding: 240px 40px 80px 40px;
        transition: width ${SIDEBAR_MOVE_TIME}s, padding ${SIDEBAR_MOVE_TIME}s, background-color 0.5s ease, border-right-color ${SIDEBAR_MOVE_TIME}s ease;
    }
  
    .layout {
        position: absolute;
        margin-left: -100px;
        font-weight: 200;
        transition: margin-left ${SIDEBAR_MOVE_TIME}s;
    }
    .layout-visible {
        margin-left: 0;
        position: absolute;
        font-weight: 200;
        transition: margin-left ${SIDEBAR_MOVE_TIME}s;
    }
  
    .post-form {
        display: flex;
        margin-top: 50px;
    }
  
    .post-search {
        padding: 10px 10px 10px 10px;
        border: 0 solid transparent;
        border-bottom: 1px solid ${(props) => props.theme.main.sidebar.postSearchFontColor};
        background-color: ${(props) => props.theme.main.sidebar.postSearchBackgroundColor};
        color: ${(props) => props.theme.main.sidebar.postSearchFontColor};
        outline: none;
      
    }
    .post-search-invisible {
        width: 0;
        transition: width ${SIDEBAR_MOVE_TIME}s;
    }
    .post-search-visible {
        width: 80%;
        transition: width ${SIDEBAR_MOVE_TIME}s, background-color 0.5s ease, color 0.5s ease, border-bottom-color 0.5s ease;
    }
    .search-button {
        margin-right: 30px;
        border: 0 solid transparent;
        cursor: pointer;
        border-radius: 3px;
        background-color: ${(props) => props.theme.main.sidebar.buttonBackgroundColor};
        color: ${(props) => props.theme.main.sidebar.buttonFontColor};
        transition: background-color 0.5s ease, color 0.5s ease;
      
        &:hover {
            background-color: ${(props) => props.theme.main.sidebar.buttonHoveredBackgroundColor};
        }
    }
  
    h2 {
        color: ${(props) => props.theme.main.sidebar.itemColor};
        font-weight: 200;
        &:hover {
            color: ${(props) => props.theme.main.sidebar.hoveredItemColor};
        }
    }
`;

export default Sidebar;