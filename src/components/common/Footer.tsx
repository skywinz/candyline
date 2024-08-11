"use client";

import Link from 'next/link';
import useDefaultPadding from '@/hooks/useDefaultPadding';
import useSocialStatus from '@/stores/social';
import SocialIcon from '@/components/common/SocialIcon';
import styled from 'styled-components';

const Footer = () => {
    const {defaultPaddingLeftRightValue} = useDefaultPadding();
    const {socials} = useSocialStatus();

    const ItemStyle = {
        marginRight: '20px',
        textDecoration: 'none',
    }

    const SocialIconList = socials.map((social) => (
        <a href={social.name === "email" ? "mailto:" : "" + social.url} key={social.name} style={{
            color: "white",
        }}>
            <SocialIcon social={social} iconSize={24} />
        </a>
    ));

    return (
        <div
            className='footer'
            style={{
                padding: `40px ${defaultPaddingLeftRightValue}px 40px ${defaultPaddingLeftRightValue}px`
            }}
        >
            <p>Copyright 2024. recoma. All rights reserved.</p>
            <IconListLayer>
                {SocialIconList}
            </IconListLayer>
        </div>
    );
}

const IconListLayer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export default Footer;