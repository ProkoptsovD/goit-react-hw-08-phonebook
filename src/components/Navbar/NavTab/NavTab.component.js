import PropTypes from 'prop-types';
import { StyledNavLink } from './NavTab.styled';

const NavTab = ({ text, ...restProps }) => {
    return (
        <StyledNavLink
            { ...restProps }
        >
            { text }
        </StyledNavLink>
    );
}

NavTab.propTypes = {
    text: PropTypes.string
}

export default NavTab;