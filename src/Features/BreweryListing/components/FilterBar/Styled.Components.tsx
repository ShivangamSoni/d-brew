import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`;

export const FieldGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const FormField = styled.label``;

export const Button = styled.button`
    appearance: none;
    border: none;
    outline: none;
    cursor: pointer;

    background-color: ${({ theme }) => theme.white[500]};
    padding: 0.3em 1em;
`;

export const Select = styled.select`
    border: 1px solid ${({ theme }) => theme.text};
    outline: none;
    cursor: pointer;

    background-color: ${({ theme }) => theme.white[500]};
    padding: 0.3em 1em;
`;
