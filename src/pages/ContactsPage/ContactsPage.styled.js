import { Button } from "@mui/material";
import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px 0 0 0;
`;
export const InnerWrapper = styled.div`
    flex-grow: 80;
`;

export const OpenDrawerButton = styled(Button)`
    && {
        background-color: limegreen;
        margin-left: 4px;

        &:hover {
            background-color: green;
        }
    }
`;