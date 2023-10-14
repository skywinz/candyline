'use client';

import styled from 'styled-components';
import Link from 'next/link';

interface SidebarArgs {
    isVisible: boolean;
}


const Sidebar = ({isVisible}: SidebarArgs) => {
    let searchWord = '';

    const searchButtonHandler = () => {
        const postUrl = `/posts?word=${searchWord}`;
        window.location.href = postUrl; // TODO 성능저하 우려, 수정 필요
    }

    return (
        <Main>
            <div className={`parent-layout${isVisible ? '-visible' : ''}`}>
                <div className={`layout${isVisible ? '-visible' : ''}`}>
                    <Link href='/' style={{textDecoration: 'none'}}><h2>홈</h2></Link>
                    <Link href='/posts' style={{textDecoration: 'none'}}><h2>포스트</h2></Link>
                    <Link href='/series' style={{textDecoration: 'none'}}><h2>시리즈</h2></Link>
                    <div className='post-form'>
                        <input
                            type='text'
                            placeholder='검색어를 입력하세요'
                            className={`post-search post-search${isVisible ? '-visible' : '-invisible'}`}
                            onChange={(e) => {
                                searchWord = e.target.value;
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
        transition: width 0.4s, padding 0.4s;
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
        transition: width 0.4s, padding 0.4s, background-color 0.5s ease, border-right-color 0.5s ease;
    }
  
    .layout {
        position: absolute;
        margin-left: -100px;
        font-weight: 200;
        transition: margin-left 0.4s;
    }
    .layout-visible {
        margin-left: 0;
        position: absolute;
        font-weight: 200;
        transition: margin-left 0.4s;
    }
  
    .post-form {
        display: flex;
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
        transition: width 0.4s;
    }
    .post-search-visible {
        width: 80%;
        transition: width 0.4s, background-color 0.5s ease, color 0.5s ease, border-bottom-color 0.5s ease;
    }
    .search-button {
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