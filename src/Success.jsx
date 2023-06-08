import React from "react";
import { styled } from "styled-components";
import successIcon from "./assets/icon-success.svg";
const Success = ({ dismissHandler }) => {
    return (
        <Wrapper className="container">
            <div className="content">
                <img src={successIcon} alt="icon" className="icon" />
                <h1 className="title">Thanks for subscribing!</h1>
                <p className="text">
                    A confirmation email has been sent to email@emil.com. Please open it and click the button
                    inside to confirm your subscription.
                </p>
            </div>

            <button onClick={dismissHandler} className="submit">
                Dismiss message
            </button>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    margin: 15vh auto;
    width: 30vw;
    padding: 30px 40px 40px;

    .icon {
        width: 48px;
        margin-bottom: 16px;
    }
    .title {
        margin-bottom: 12px;
    }
    .text {
        line-height: 1.5;
        margin-bottom: 28px;
    }

    @media only screen and (max-width: 900px) {
        margin: 15vh auto;
        width: 50vw;
    }
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
        margin: auto;
        padding: 40px 30px;

        .content {
            margin-top: 12vh;
        }
        .icon {
            margin-bottom: 24px;
        }
        .submit {
            margin-top: auto;
        }
    }
`;
export default Success;
