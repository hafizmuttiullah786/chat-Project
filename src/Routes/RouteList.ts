import { RouteNames } from "./RouteName";
import Login from "../component/Login";
import Chat from "../component/Chat";
import RegisterScreen from "../screens/RegisterScreen";
export const RouteList = [
  {
    path: RouteNames.home,
    element: Chat,
  },
  {
    path: RouteNames.login,
    element: Login,
  },
  {
    path: RouteNames.register,
    element: RegisterScreen,
  },
  {
    path: RouteNames.chat,
    element: Chat,
  },
];
