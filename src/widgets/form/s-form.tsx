import { Box } from "@mui/material"
import styled from "styled-components"

export const SBox = styled(Box)`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    
    .formTextField{
        width: 50%
    }
    @media (max-width: 576px) {
        flex-direction: column;
        gap: 20px;
        .formTextField{
            width: 100%
        }
    }
`