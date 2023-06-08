import React, { useReducer, useState } from "react";
import Form from "./Form";
import { EMAIL_VAL, BLUR_VALIDATE } from "./actions";
import { styled } from "styled-components";
import Success from "./Success";

const emailReducer = (state, action) => {
    if (action.type === EMAIL_VAL) {
        if (state.isValid === false) {
            return { ...state, value: action.payload, isValid: /\S+@\S+\.\S+/.test(state.value) };
        }
        return { ...state, value: action.payload };
    }
    if (action.type === BLUR_VALIDATE) {
        return { ...state, isValid: /\S+@\S+\.\S+/.test(state.value) };
    }
    return state;
};
const App = () => {
    const [email, dispatch] = useReducer(emailReducer, { value: "", isValid: true });
    const [submited, setSubmited] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (email.isValid) {
            setSubmited(true);
        }
    };
    const dismissHandler = () => {
        setSubmited(false);
    };

    return (
        <Wrapper>
            {submited ? (
                <Success dismissHandler={dismissHandler} />
            ) : (
                <Form email={email} dispatch={dispatch} submitHandler={submitHandler} />
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .container {
        border-radius: 20px;
        background-color: var(--white);
        color: hsl(234, 29%, 20%);
        max-width: 1000px;
    }
    .submit {
        background: var(--dark-slate);
        color: var(--white);
        font-weight: 700;
        width: 100%;
        border-radius: 8px;
        padding: 20px;
        cursor: pointer;
        border: none;
    }
    .submit:hover {
        background: linear-gradient(90deg, #ff477e, var(--tomato));
    }
    @media only screen and (max-width: 600px) {
        .container {
            border-radius: 0;
        }
    }
`;
export default App;
