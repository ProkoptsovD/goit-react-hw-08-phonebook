import styled from "styled-components";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "components/common/Container";

export const Wrapper = styled(Container)`
`;
export const StyledBox = styled(Box)`
    width: 350px;

    & > :not(:last-child) {
        margin-bottom: 10px;
    }
`;
export const InputWithLabel = styled(TextField)`
    display: block;
    width: 100%;

    & > label {
        font-size: 0.85rem;
    }
    & .MuiInputBase-root {
        width: 100%;
    }
`;
export const SignupButton = styled(Button)`
    && {
        display: block;
        width: 100%;
    }
`;