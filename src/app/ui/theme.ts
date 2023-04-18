import { Button, Input, ThemeConfig } from "antd";
import styledTheme from "./themeStyled";
import Title from "antd/es/typography/Title";

export const mainTheme:ThemeConfig = {
  token: {
    colorPrimary: styledTheme.colors.main,
  },
  components: {
    Button: {
      colorText: styledTheme.colors.white,
      colorBgTextHover: styledTheme.colors.mainDark,   
      controlHeight: 50,
      fontSize: 16,
    },
    Typography: {
      colorText: styledTheme.colors.main,
    },
    Input: {
      controlHeight: 50,
      fontSize: 16,
    },
    Select: {
      controlHeight: 50,
      fontSize: 16,
    },
  }
}