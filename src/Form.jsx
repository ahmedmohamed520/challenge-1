import React from "react";
import { styled } from "styled-components";
import iconList from "./assets/icon-list.svg";
import bgImg from "./assets/illustration-sign-up-desktop.svg";
import mobBgImg from "./assets/illustration-sign-up-mobile.svg";
import { EMAIL_VAL, BLUR_VALIDATE } from "./actions";

const Form = ({ email, dispatch, submitHandler }) => {
    const emailValueHandler = (e) => {
        dispatch({ type: EMAIL_VAL, payload: e.target.value });
    };
    const blurValidationHandler = () => {
        dispatch({ type: BLUR_VALIDATE });
    };

    return (
        <Wrapper className="container">
            <div className="form">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on: </p>
                <ul className="list">
                    <li className="list-item">
                        <img src={iconList} alt="icon" className="icon" />
                        <p>Product discovery and building what matters</p>
                    </li>
                    <li className="list-item">
                        <img src={iconList} alt="icon" className="icon" />
                        <p>Measuring to ensure updates are a success</p>
                    </li>
                    <li className="list-item">
                        <img src={iconList} alt="icon" className="icon" />
                        <p>And much more!</p>
                    </li>
                </ul>
                <form onSubmit={submitHandler} action="">
                    <div className={`form-control ${!email.isValid && "error"}`}>
                        {email.value === "" && <span>Please enter an email</span>}
                        {email.value !== "" && !email.isValid && <span>Valid email required</span>}
                        <label htmlFor="email">Email address</label>
                        <br />
                        <input
                            onChange={emailValueHandler}
                            onBlur={blurValidationHandler}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@company.com"
                        />
                    </div>
                    <button className="submit">Subscribe to monthly newsletter</button>
                </form>
            </div>
            <div className="image">
                <img src={bgImg} alt="bg" className="bg-img" />
                <img src={mobBgImg} alt="bg" className="mob-bg-img" />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    height: 80vh;
    width: 70vw;
    margin: 10vh auto;
    padding: 1.25rem;

    .form {
        width: 60%;
        padding: 2.5rem;
        overflow: auto;
    }
    .list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.625rem;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
    }
    .list-item {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }
    .icon {
        width: 1.5rem;
    }
    .form-control {
        margin-bottom: 1rem;
    }
    label {
        color: var(--dark-slate);
        font-weight: 700;
        fonts-size: 0.875rem;
        margin-bottom: 0.5rem;
        display: inline-block;
    }
    input {
        padding: 1rem 0.75rem;
        border-radius: 0.5rem;
        border: 1px solid var(--grey);
        width: 100%;
    }
    input:focus {
        outline: 1px solid var(--charcoal-grey);
    }
    // Button
    .form-control {
        position: relative;
    }
    .form-control span {
        display: none;
    }

    .error span,
    .error input {
        color: var(--tomato);
    }
    .error span {
        display: block;
        position: absolute;
        right: 0;
        font-size: 0.75rem;
    }
    .error input {
        background-color: var(--tomato-light);
        border-color: var(--tomato);
        outline-color: var(--tomato);
    }
    .error input::placeholder {
        color: var(--tomato);
    }
    .image {
        width: 40%;
        border-radius: 0.625rem;
        overflow: hidden;
    }
    .bg-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .mob-bg-img {
        display: none;
    }

    @media only screen and (max-width: 1000px) {
        width: 80vw;
        margin: 10vh auto;
        padding: 1.25rem;
        .form {
            padding: 1.875rem 1.25rem;
        }
    }
    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        height: auto;
        min-height: 100vh;
        width: 100%;
        margin: auto;
        padding: 0;
        padding-bottom: 1.25rem;
        .form {
            width: 100%;
            overflow: hidden;
        }
        .list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
            margin-top: 1rem;
            margin-bottom: 1.5rem;
        }
        .list-item {
            display: flex;
            align-items: center;
            gap: 1.25rem;
        }

        .image {
            width: 100%;
            height: 40vh;
            border-radius: 0 0 1.25rem 1.25rem;
        }
        .bg-img {
            display: none;
        }
        .mob-bg-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 0% 80%;
        }
    }
`;
export default Form;
