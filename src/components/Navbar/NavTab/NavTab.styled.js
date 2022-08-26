import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
    && {
        position: relative;
        display: block;
        font-weight: 700;
        text-decoration: none;
        color: gray;

        &:visited {
            color: gray;
        }
        &:active {
            color: #1565c0;
        }
    }
`;