import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCreateUserMutation, useLoginUserMutation } from 'services/authApi';
import { StyledBox, InputWithLabel, Wrapper, SignupButton } from "./AuthForm.styled";
import { FLAGS } from "constants";

const AuthForm = ({ type }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUser] = useCreateUserMutation();
    const [loginUser] = useLoginUserMutation();
    const isRegisterForm = type === FLAGS.authForm.register;

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userCredentials = isRegisterForm ? { name, email, password } : { email, password }
        if (isRegisterForm) {
            createUser(userCredentials)
                .then(reset);
        } else {
            loginUser(userCredentials)
                .then(reset);
        }
    }

    return (
        <Wrapper>
            <StyledBox
                component="form"
                onSubmit={handleSubmit}
            >
                {
                    isRegisterForm && <InputWithLabel
                        id="userName"
                        name="userName"
                        label="User name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                }
                <InputWithLabel
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputWithLabel
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <SignupButton
                    type="submit"
                    variant="contained"
                >
                    {isRegisterForm ? 'Sign Up' : 'Log In'}
                </SignupButton>
            </StyledBox>
        </Wrapper>
    )
}

AuthForm.propTypes = {
    type: PropTypes.string.isRequired
}

export default AuthForm;