import styled, { css } from 'styled-components';
import { AddContact } from 'components/ContactForm/ContactForm.styled';

const commonCss = css`
    font-weight: 500;
    font-style: italic;

    & span {
        font-weight: 400;
        font-style: normal;
    }
`;

export const Title = styled.p`
    font-weight: 700;
    font-size: 1.15rem;
    text-align: center;
`;
export const UserName = styled.p`
    ${commonCss}
`;
export const UserEmail = styled.p`
    ${commonCss}
`;
export const LogoutButton = styled(AddContact)`
    && {
        height: 24px;
        font-size: 0.85rem;

        & > svg {
            margin-right: 0px;
            margin-left: 4px;
        }
    }
`;