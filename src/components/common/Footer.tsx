import Link from 'next/link';

const Footer = () => {

    const ItemStyle = {
        marginRight: '20px',
        textDecoration: 'none',
    }

    return (
        <div className='footer'>
            <p>Copyright 2023. SkyWINZ(DevTeam), recoma. All rights reserved.</p>
            <div style={{
                display: 'flex',
            }}>
                <Link href='https://github.com/skywinz' style={ItemStyle}><p>Github</p></Link>
            </div>
        </div>
    );
}

export default Footer;