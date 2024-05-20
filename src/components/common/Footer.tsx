import Link from 'next/link';
import useDefaultPadding from '@/hooks/useDefaultPadding';

const Footer = () => {
    const {defaultPaddingLeftRightValue} = useDefaultPadding();

    const ItemStyle = {
        marginRight: '20px',
        textDecoration: 'none',
    }

    return (
        <div
            className='footer'
            style={{
                padding: `40px ${defaultPaddingLeftRightValue}px 40px ${defaultPaddingLeftRightValue}px`
            }}
        >
            <p>Copyright 2024. SkyWINZ(DevTeam), recoma. All rights reserved.</p>
            <div style={{
                display: 'flex',
            }}>
                <Link href='https://github.com/skywinz' style={ItemStyle}><p>Github</p></Link>
            </div>
        </div>
    );
}

export default Footer;