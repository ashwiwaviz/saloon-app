import {lazy, Suspense} from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import '../src/assets/scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const DashBoard = lazy(() => import("./page/Dashboard"));
const Login = lazy(() => import("../src/Component/Login"));
const Sign_in = lazy(() => import("../src/Component/Sign_in"));
const Forget_Password= lazy(() => import("../src/Component/Forget_Password"));

const isLoggedIn = false;

const router = createBrowserRouter ([
  {
    path: "/",
    element: isLoggedIn ? (
      <Suspense fallback={<div>loading...</div>}>
        <DashBoard />
      </Suspense>
    ) : (
      <Navigate to="/login" />
    ),
  },
  {
    path: "/login",
    element: !isLoggedIn ? (
      <Suspense fallback={<div>loading...</div>}>
        <Login />
      </Suspense>
    ) : (
      <Navigate to="/" />
    ),
    children: [
      {
        path: "/login/sign_in",
        element: !isLoggedIn ? (
          <Suspense fallback={<div>loading...</div>}>
            <Sign_in />
          </Suspense>
        ) : (
          <Navigate to="/DashBoard" />
        ),
      },
      {
        path: "/login/Forget_Password",
        element: !isLoggedIn ? (
          <Suspense fallback={<div>loading...</div>}>
            <Forget_Password />
          </Suspense>
        ) : (
          <Navigate to="/login/sign_in" />
        ),
      }
    ]
  },
 
])

export default function App() {
  return (
    <>
     <RouterProvider router={router} /> 
    </>
  )
}
