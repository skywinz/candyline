import {FaGithub, FaInternetExplorer, FaLinkedinIn} from 'react-icons/fa';
import {FaEarthAsia, FaXTwitter} from 'react-icons/fa6';
import {GrInstagram} from 'react-icons/gr';
import {AiFillFacebook} from 'react-icons/ai';
import {IoLogoYoutube} from 'react-icons/io';
import {ImSoundcloud} from 'react-icons/im';
import {SiNaver, SiTistory, SiVelog} from 'react-icons/si';
import {MdEmail} from 'react-icons/md';

const text2Icon = new Map<string, Element>([
    ["github", FaGithub],
    ["instagram", GrInstagram ],
    ["facebook", AiFillFacebook ],
    ["x", FaXTwitter],
    ["linkedin", FaLinkedinIn],
    ["youtube", IoLogoYoutube],
    ["soundcloud", ImSoundcloud],
    ["velog", SiVelog],
    ["tistory", SiTistory],
    ["naverblog", SiNaver],
    ["email", MdEmail],
    ["site", FaEarthAsia]
]);

interface SocialIconArgs {
    social: Social;
    iconSize: number;
}

const SocialIcon = ({social, iconSize}: SocialIconArgs) => {
    const IconElement = text2Icon.has(social.name) ? text2Icon.get(social.name) : FaInternetExplorer;
    return <IconElement size={iconSize} />
}

export default SocialIcon;