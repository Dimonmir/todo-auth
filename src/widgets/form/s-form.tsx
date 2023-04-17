import styled from "styled-components"

export const SBox = styled("div")`
    margin-top: 30px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 3fr 2fr 1fr 1fr; 
    grid-gap: 20px 40px;

    button {
        height: 50px !important;
    }

    @media (max-width: 576px) {
        flex-direction: column;
        gap: 20px;
        .formTextField{
            width: 100%
        }
    }
`