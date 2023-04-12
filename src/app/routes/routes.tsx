import { AuthForm } from "@widgets/authForm/authForm";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthForm/>,
    },
    // {
    //   path: "/result",
    //   element: <PageResult />,
    // },
    // {
    //   path: "/guide/:guide",
    //   element: <PageGuide />,
    // },
  ]);

  export default router