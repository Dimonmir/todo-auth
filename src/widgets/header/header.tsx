import { ExportOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { Container } from "./s-header";
import { ContainerFlex } from "@/s-app";
import { authLogout } from "@/features/authForm/api";
import { useAppDispatch, useAppSelector } from "@/shared/store/redux";
import { removeToken } from "@/entities/session/sessionSlice";
import { removeAllTodo } from "@/shared/store/todoSlice";

export default function Header() {
    const name = useAppSelector(state => state.user.name)
    const dispatch = useAppDispatch()
    const handlerLogout = ()=>{
        authLogout().finally(()=>{
            dispatch(removeToken())
            dispatch(removeAllTodo())
        })
    }

    return (
        <Container>
            <Typography.Title level={2} className="headerText">
                Список дел
            </Typography.Title>
            <ContainerFlex>
                <Typography.Title level={2} className="headerText">
                    {name}
                </Typography.Title>
                <Button className="headerText" type="text" shape="circle" size={"large"} icon={<ExportOutlined style={{ fontSize: '20px'}}/>} onClick={handlerLogout}/>
            </ContainerFlex>
        </Container>
    )
}