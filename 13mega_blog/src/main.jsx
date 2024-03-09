import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
    Home,
    Login,
    AddPost,
    EditPost,
    Signup,
    Post,
} from "./pages/index";
import { AuthProtected as AuthLayout } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                ),
            },
            {
                path: "/signup",
                element: (
                    <AuthLayout authentication={false}>
                        <Signup />
                    </AuthLayout>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <AddPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <AuthLayout authentication>
                        {" "}
                        <EditPost />
                    </AuthLayout>
                ),
            },
            {
                path: "/posts/:slug",
                element: <Post />,
            },
        ],
    },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
