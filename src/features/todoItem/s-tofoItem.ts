import styled from "styled-components";

export const ContainerTodoItem = styled('div')`
    margin-top: 30px;
    border: 1px solid blue;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .boxFlexContainer{
        display: flex;
        flex-direction: column;
        width: 80%;
        gap: 30px;
    }

    .boxFlex{
        display: flex;
        justify-content: space-between;
        gap: 20px;

        & .driver {
            text-align: center;
            border-bottom: 1px solid #F3F3F3;
            flex: 1 1 70%;
            display: flex;
            gap: 10px;
            padding-bottom: 6px;
            justify-content: center;
            align-items: baseline;
        }
    }

    .body{
        text-align: center;
    }
`