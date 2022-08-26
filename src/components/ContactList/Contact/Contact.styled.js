import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';

export const ContactCard = styled.article`
    display: flex;
    align-items: center;
    width: 100%;
`;
export const Name = styled.p``;
export const Phone = styled.p``;
export const EditButton = styled(IconButton)`
    && {
        width: 20px;
        height: 20px;
        margin-left: auto;
        margin-right: 4px;
        background-color: #ff0000;
        color: #ffffff;

        &:hover {
            background-color: rgba(0, 0, 0, 0.34);
        }

        & svg {
            width: 14px;
            height: 14px;
        }
    }
`;