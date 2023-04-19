import { Form } from "antd"
import styled from "styled-components"

export const SBox = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 40px;
    & > * {
        flex: 0 1 15%;
    }
`

export const CBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
`