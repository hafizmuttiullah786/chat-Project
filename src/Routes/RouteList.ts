import { RouteNames } from "./RouteName";
import Chat from "../component/Chat";
import RegisterScreen from "../screens/RegisterScreen";
import UsersList from "../component/UsersList";
import LoginScreen from "../screens/LoginScreen";
import Parent from "../component/Parent";
import MemoPractice from "../component/MemoPractice";
import LandingJazzCash from "../component/LandingJazzCash";
export const RouteList = [
  {
    path: RouteNames.home,
    element: Chat,
  },
  {
    path: RouteNames.login,
    element: LoginScreen,
  },
  {
    path: RouteNames.register,
    element: RegisterScreen,
  },
  {
    path: RouteNames.chat,
    element: Chat,
  },
  {
    path: RouteNames.users,
    element: UsersList,
  },
  {
    path: RouteNames.practice,
    element: Parent,
  },
  {
    path: RouteNames.memo,
    element: MemoPractice,
  },
  {
    path: RouteNames.landing,
    element: LandingJazzCash,
  },
];
