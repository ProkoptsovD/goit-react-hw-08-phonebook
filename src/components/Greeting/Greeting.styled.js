import styled from 'styled-components';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const UserButton = styled(ButtonUnstyled)`
    font: inherit;
    font-weight: 700;
    text-transform: initial;
    background-color: transparent;
    border: none;

    transition: color 250ms linear;

    &:hover {
        cursor: ${(({ isguest }) => isguest === 'true' ? 'initial' : 'pointer')};
        color: ${(({ isguest }) => isguest === 'true' ? 'inherit' : 'var(--clr-accent-100)')};
    }
`;