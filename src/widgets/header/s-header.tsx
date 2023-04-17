import styled from "styled-components";

export const Container = styled('div')`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    background-color: ${({ theme }) => theme.colors.main};
    .headerText {
        color: white;
    }
`