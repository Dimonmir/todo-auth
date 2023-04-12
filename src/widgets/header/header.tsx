import { ExportOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Container } from "./s-header";
import { ContainerFlex } from "@/s-app";
import { mainTheme } from "@/app/ui/theme";

export default function Header() {
    return (
        <Container>
            <Typography.Title level={2}>
                Список дел
            </Typography.Title>
            <ContainerFlex>
                <Typography.Title level={2}>
                    Имя
                </Typography.Title>
                <ExportOutlined />
            </ContainerFlex>
        </Container>
    )
}