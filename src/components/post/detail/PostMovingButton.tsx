'use client';

import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import React, {CSSProperties} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {PrevNextPostItem} from '@/types/post';
import {PAGE_MOVE_TO_LEFT} from '@/constants/client';

interface PostMovingButtonParams {
    direction: boolean;
    item: PrevNextPostItem;
    width: string;
}

const PostMovingButton = (params: PostMovingButtonParams) => {
    const {direction, item, width} = params;
    const {id, title} = item;
    const iconCommonStyle: CSSProperties = {}
    const iconLeftStyle: CSSProperties = {
        ...iconCommonStyle,
        float: 'left'
    }
    const iconRightStyle: CSSProperties = {
        ...iconCommonStyle,
        float: 'right'
    }

    const Layout = direction === PAGE_MOVE_TO_LEFT ? LeftLayout : RightLayout;
    const IconContainer = () => {
        const Icon = direction === PAGE_MOVE_TO_LEFT ? CiCircleChevLeft : CiCircleChevRight;
        const style = direction === PAGE_MOVE_TO_LEFT ? iconLeftStyle : iconRightStyle;
        const size = 30;
        return (
            <BaseIconContainer>
                <Icon style={style} size={size} />
            </BaseIconContainer>
        );
    }
    const TextContainer = () => {
        const Container = direction === PAGE_MOVE_TO_LEFT ? LeftTextContainer : RightTextContainer;
        const directionText = direction == PAGE_MOVE_TO_LEFT ? '이전글' : '다음글';
        return (
            <Container>
                <p className='direction'>{directionText}</p>
                <p className='title'>{title}</p>
            </Container>
        );
    }
    const Containers = direction == PAGE_MOVE_TO_LEFT ?
        [<IconContainer key={1} />, <TextContainer key={2} />] : [<TextContainer key={1} />, <IconContainer key={2} />];
    return (
        <Link href={`/posts/${id}`} style={{ width }}>
            <Layout style={{ width }}>
                {Containers}
            </Layout>
        </Link>
    );
}

const BaseLayout = styled.div`
    display: flex;
    height: auto;
    color: ${(props) => props.theme.main.postDetail.pageMovingButtonFontColor};
    background-color: ${(props) => props.theme.main.postDetail.pageMovingButtonBackgroundColor};
    border: 2px solid ${(props) => props.theme.main.postDetail.pageMovingButtonBorderColor};
    border-radius: 5px;
    box-shadow: rgba(200, 200, 200, 0.3) 5px 6px 8px 0;
    padding: 25px;
    margin-bottom: 50px;
    cursor: pointer;
    box-sizing: border-box;
  
    transition: background-color 0.2s;
  
    &:hover {
        background-color: ${(props) => props.theme.main.postDetail.pageMovingButtonHoveredBackgroundColor};
    }
  
`;
const LeftLayout = styled(BaseLayout)`
    float: left;
`;
const RightLayout = styled(BaseLayout)`
    float: right;
`;

const BaseTextContainer = styled.div`
    margin-top: -25px;
    margin-bottom: -25px;
    width: 100%;
    p {
      font-size: 0.8em;
    }
    .direction {
        color: ${(props) => props.theme.main.postDetail.pageMovingButtonFontColor};
    }
    .title {
        margin-top: -8px;
        color: ${(props) => props.theme.main.postDetail.pageMovingButtonTitleFontColor};
    }
`;
const LeftTextContainer = styled(BaseTextContainer)`
    margin-left: 15px;
    text-align: right;
`;
const RightTextContainer = styled(BaseTextContainer)`
    margin-right: 15px;
    text-align: left;
`;
const BaseIconContainer = styled.div`
    display: grid;
    place-items: center;
    color: ${(props) => props.theme.main.postDetail.pageMovingButtonIconColor};
`;

export default PostMovingButton;