import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100%;
        background: #003554;
        color: #ecf0ff;
        font-family: "Oxygen", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }

    h2 {
        font-weight: bold;
        font-size: 2rem;
        margin-bottom: 2.4rem;
    }

    .box {
        margin-top: 84px;
        margin-bottom: 36px;
        padding: 2.4rem 0;
    }
`;
