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
                        <p>Product discovery and building what matters</p>
                    </li>
                    <li className="list-item">
                        <img src={iconList} alt="icon" className="icon" />
                        <p>Product discovery and building what matters</p>
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
    width: 60vw;
    margin: 10vh auto;
    padding: 20px;

    .form {
        width: 60%;
        padding: 40px;
        overflow: auto;
    }
    .list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 16px;
        margin-bottom: 24px;
    }
    .list-item {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .icon {
        width: 24px;
    }
    .form-control {
        margin-bottom: 16px;
    }
    label {
        color: var(--dark-slate);
        font-weight: 700;
        fonts-size: 14px;
        margin-bottom: 8px;
        display: inline-block;
    }
    input {
        padding: 10px;
        border-radius: 8px;
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
        font-size: 12px;
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
        border-radius: 10px;
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
        width: 90vw;
        margin: 10vh auto;
        padding: 20px;
        .form {
            padding: 30px 20px;
        }
    }
    @media only screen and (max-width: 600px) {
        flex-direction: column-reverse;
        height: auto;
        min-height: 100vh;
        width: 100vw;
        margin: auto;
        padding: 0;
        padding-bottom: 20px;
        .form {
            width: 100%;
            overflow: hidden;
        }
        .list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: 16px;
            margin-bottom: 24px;
        }
        .list-item {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .image {
            width: 100vw;
            height: 40vh;
            border-radius: 0 0 20px 20px;
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
