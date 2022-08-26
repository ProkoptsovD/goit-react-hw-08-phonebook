import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { LogoWrapper, LogoText } from './Logo.styled';

const Logo = () => {
    return (
        <LogoWrapper>
            <PhoneAndroidIcon sx={{color: 'var(--clr-accent-100)'}} />
            <LogoText>Phonebook</LogoText>
        </LogoWrapper>
    )
}

export default Logo;