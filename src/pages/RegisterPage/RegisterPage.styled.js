import styled from 'styled-components';
import Container from 'components/common/Container';

export const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding-top: 40px;
`;
export const PageTitle = styled.h1`
    margin-bottom: 35px;
    text-align: center;
`;
export const Wrapper = styled.div`
    width: 350px;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;

    & > :last-child {
        margin-left: 75px;
    }
`;
