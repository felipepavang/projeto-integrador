import styled from "styled-components";

export const ScreenContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  margin-top: 53px;
`;

export const BoxContainer = styled.div`
  background: #d9d9d9;
  border-radius: 8px;
  padding: 1rem 5rem;
`;

export const RegisterTitle = styled.h1`
  margin-top: 1rem;
  font-size: 48px;
  text-align: center;
`;

export const RegisterForm = styled.form`
  background-color: "red";
`;

export const RegisterFormLabel = styled.h3`
  margin-bottom: 0.5rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

export const RegisterFormLabelBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  :nth-child(2) {
    margin: 0 2rem;
  }
`;

export const RegisterFormInput = styled.input`
  width: 100%;
  height: 40px;
`;

export const RegisterFormBox = styled.div`
  display: flex;
  flex-direction: inherit;
  justify-content: space-between;
`;

export const RegisterFormTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 200px;
  resize: none;
`;

export const RegisterFormButtton = styled.button`
  width: 100%;
  height: 55px;
  background: #333333;
  border-radius: 8px;
  color: #fff;
  margin-top: 3rem;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const RegisterFormMessageErrors = styled.p`
  display: block;
  color: #ff0000;
  margin: 5px 0 0;
`;
