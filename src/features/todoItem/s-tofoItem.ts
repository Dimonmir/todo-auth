import styled from "styled-components";

export const ContainerTodoItem = styled.div.attrs((props: {itemComplited: boolean, itemPast: boolean}) => props)`
    margin-top: 30px;
    border: 1px solid ${(props)=> props.itemComplited ? "green" : props.itemPast ?  "red" : "blue" };
    border-radius: 10px;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

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

    @media (max-width: 576px) {
        padding: 3% 3%;
        margin-top: 5%;  
        .boxFlexContainer{
            gap: 10%;
        }

        .boxFlex{
            gap: 5%;

                & .driver {
                flex: 1 1 20%;
            }
        }
    }
`