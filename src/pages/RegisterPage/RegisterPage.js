import AuthForm from "components/AuthForm"
import BackLink from "components/BackLink";
import { PageTitle, StyledContainer, Wrapper } from "./RegisterPage.styled";
import { FLAGS } from "constants";
import { ROUTES } from "constants";

const AuthPage = () => {
    return (
        <StyledContainer>
            <Wrapper>
                <BackLink to={ `/${ROUTES.LOGIN}` } />
                <PageTitle>Register</PageTitle>
            </Wrapper>
            <AuthForm type={ FLAGS.authForm.register }/>
        </StyledContainer>
    )
}

export default AuthPage;