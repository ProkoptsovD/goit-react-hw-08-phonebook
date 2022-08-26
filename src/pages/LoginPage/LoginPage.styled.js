import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.span`
    padding-top: 10px;
    font-size: 0.85rem;
`;

export const NavigateLink = styled(Link)`
    display: inline-block;
    margin-left: 5px;
    color: var(--clr-accent-100);
`;