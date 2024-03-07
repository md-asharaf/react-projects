import React, { useState } from "react";
import { Input, Button, Logo } from "./index";
import { authService } from "../appwrite/index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const onSubmitHandler = async (data) => {
        setError("");
        try {
            const response = await authService.createAccount(data);
            if (!response) return;
            console.log("RESPONSE:",response)
            navigate("/login");
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="60%" />
                    </span>
                </div>
            <h2 className="text-center text-2xl font-bold leading-tight">
                sign up your account
            </h2>
            <p className="mt-2 text-center text-base text-black/60">
                already have an account?
                <Link to="/login">
                    <Button  className="px-2 py-1">Log In</Button>
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                    <Button className="w-full p-2" type="submit">Create Account</Button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Signup;
