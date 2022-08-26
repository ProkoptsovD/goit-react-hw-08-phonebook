import AuthForm from "components/AuthForm";
import { FLAGS } from "constants";
import { PageTitle, StyledContainer } from "pages/RegisterPage/RegisterPage.styled";
import { NavigateLink, Wrapper } from "./LoginPage.styled";
import { ROUTES } from "constants";

const LoginPage = () => {
    return (
        <StyledContainer>
            <PageTitle>Please login</PageTitle>
            <AuthForm type={ FLAGS.authForm.login }/>
            <Wrapper>
                Don't have an account? Register
                    <NavigateLink
                        to={ `/${ROUTES.REGISTER}` }
                    >
                        here
                    </NavigateLink>
            </Wrapper>
        </StyledContainer>
    ) 
}

export default LoginPage;