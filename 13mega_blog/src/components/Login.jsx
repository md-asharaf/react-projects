import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "./index";
import { login } from "../store/index";
import { authService } from "../appwrite/index";
function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const loginHandler = async (data) => {
        setError("");
        try {
            const session = await authService.login(data);
            setError(session)
            if (!session) {
                const currentUserData = await authService.getCurrentUser();
                if (currentUserData) dispatch(login(currentUserData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="flex items-center justify-center w-full">
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                {/* <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
                </div> */}
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Log into your account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?
                    <span> </span>
                    <Link to="/signup">
                        <Button className="px-6 py-1 bg-white border-gray-600 border-[1.5px] text-blue-600">
                            Sign Up
                        </Button>
                    </Link>
                </p>
                {error && (
                    <p className="text-red-600 mt-8 text-center">{error}</p>
                )}
                <form className="mt-8" onSubmit={handleSubmit(loginHandler)}>
                    <div className="space-y-5">
                        <Input
                            label="Email: "
                            placeholder="enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Password: "
                            placeholder="enter your password"
                            type="password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className="w-full p-2 bg-blue-500"
                        >
                            Sign In
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
