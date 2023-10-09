'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Tag = ({name}: {name: string}) => {
    const url = `/tags/${name}`;
    return (
        <Link href={url} style={{textDecoration: 'none'}}>
            <TagLayout>{name}</TagLayout>
        </Link>
    );
}


const TagLayout = styled.div`
    cursor: pointer;
    font-size: 0.8em;
    border-radius: 4px;
    // box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 2px 10px 2px 10px;
    margin-right: 10px;
    color: ${(props) => props.theme.tag.normalFontColor};
    background-color: ${(props) => props.theme.tag.normalBackgroundColor};
    transition: color 0.15s, background-color 0.15s;
  
    &:hover {
        color: ${(props) => props.theme.tag.hoveredFontColor};
        background-color: ${(props) => props.theme.tag.hoveredBackgroundColor};
    }
`;


export default Tag;