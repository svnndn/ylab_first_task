import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        text-align: center;
        display: flex;
        min-height: 100vh;
        min-width: 100%;
        align-items: center;
        justify-content: center;
        background-image: url(${process.env.PUBLIC_URL + '/background.jpg'});
        background-size: cover;
        margin: 0;
    }
`;