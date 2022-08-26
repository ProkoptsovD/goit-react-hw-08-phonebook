import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton  from '@mui/material/IconButton';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    & > :not(:last-child) {
        margin-bottom: 8px;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
`;

export const FormTitle = styled.p`
    text-align: center;
    font-weight: 700;
    margin-bottom: 14px;
`;

export const AddContact = styled(IconButton)`
    width: 100%;

    && {
        height: 36px;
        font: inherit;
        text-transform: uppercase;
        border-radius: 4px;
        background-color: #1565c0;
        color: #ffffff;

        &:hover {
            background-color: #1565c0;
            box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
        }

        & svg {
            height: 18px;
            margin-right: 4px;
        }
    }
`;
export const ClearButton = styled(Button)`
    width: 100%;
`;
export const Input = styled(TextField)`
    && {
        width: 100%;
        height: 39px;

        border-radius: 4px;
        background-color: #ffffff;

        & > div.MuiInputBase-root {
            height: 39px;
        }
    }
    & label {
        font-size: 0.85rem;
    }
`;