import styled from 'styled-components';

export const LoginWrapper = styled.div`
    background-color: white;
    height: 50vh;
    width: 35%;
    border-radius: 15px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-width: 400px;
    min-height: 350px;
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    text-align: left;
    padding: 5px 0;
    color: gray;
    font-weight: lighter;
    font-size: 16px;
`;

export const Header = styled.h1`
    font-weight: lighter;
    font-size: 40px;
`;

export const Input = styled.input`
    font-size: 24px;
    border-radius: 15px;
    width: 400px;
    border: 1px solid black;
    padding: 10px;
`;

export const LoginButton = styled.button`
    background-color: #681ec9;
    color: white;
    border: 1px solid black;
    border-radius: 20px;
    font-size: 24px;
    margin: 20px;
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #5413aa;
    }
`;

export const RegisterButton = styled.button`
    background-color: transparent;
    border: none;
    text-decoration: underline;
    color: gray;
    cursor: pointer;

    &:hover {
        color: #4a4a4a;
    }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Полупрозрачный фон */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 15px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  margin-top: 10px;
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;