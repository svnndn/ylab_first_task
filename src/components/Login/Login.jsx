import React, {useState} from "react";
import {
    FormWrapper,
    Header,
    Input,
    Label,
    LoginButton,
    LoginWrapper,
    Modal, ModalBody,
    ModalContent, ModalFooter, ModalHeader,
    RegisterButton
} from "./styled";
import { mockAccounts } from "./mockAccounts";

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        mockLogin(email, pass);
    }

    const mockLogin = (email, pass) => {
        setTimeout(() => {
            const successLogin = mockAccounts.find((user) => user.email === email && user.password === pass);

            if (successLogin) {
                setShowModal(true);
                setErrorMessage('');
                setEmail('');
                setPass('');
            } else {
                setErrorMessage('Invalid email or password.');
            }
        }, 1000);
    }

    return (
        <LoginWrapper>
            <Header>Log In</Header>
            {errorMessage && <p style={{color: 'red', margin: 0}}>{errorMessage}</p>}
            <FormWrapper onSubmit={handleSubmit}>
                <Label htmlFor="email">Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                       placeholder="youremail@example.ru" id="email" name="email"/>
                <Label htmlFor="password">Password</Label>
                <Input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********"
                       id="password" name="password"/>
                <LoginButton type="submit">Log In</LoginButton>
            </FormWrapper>
            <RegisterButton>Don't have an account? Register here.</RegisterButton>

            {showModal && (
                <Modal>
                    <ModalContent>
                        <ModalHeader>
                            <Header>Login Successful</Header>
                        </ModalHeader>
                        <ModalBody>
                            <p>Welcome! You have successfully logged in.</p>
                        </ModalBody>
                        <ModalFooter>
                            <LoginButton onClick={() => setShowModal(false)}>OK</LoginButton>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}

        </LoginWrapper>
    );
};

export default Login;