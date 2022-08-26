import PropTypes from 'prop-types';
import { StyledHeader, HeaderContainer } from './Header.styled';

const Header = ({ children }) => {
    return (
        <StyledHeader>
            <HeaderContainer>
                {children}
            </HeaderContainer>
        </StyledHeader>
    )
}

Header.propTypes = {
    children: PropTypes.any
}

export default Header;