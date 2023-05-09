import { lazy } from "react";
import { ROUTES } from "@/constants/route";
const Home = lazy(() => import("@/views/Home"));
const Notifications = lazy(() => import("@/views/Notification"));
const Login = lazy(() => import("@/views/Login/index"));
const Register = lazy(() => import("@/views/Register"));
const ResetPass = lazy(() => import("@/views/Login/ResetPassword/ResetPass"));

const publicRoutes: any = [
  { path: ROUTES.HOMEPAGE, component: Home },
  { path: ROUTES.HOME, component: Home },
  { path: ROUTES.NOTIFICATIONS, component: Notifications },
  { path: ROUTES.LOGIN, component: Login, layout: null },
  { path: ROUTES.REGISTER, component: Register, layout: null },
  { path: ROUTES.RESET_PASS, component: ResetPass, layout: null },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
