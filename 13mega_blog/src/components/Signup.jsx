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
        try {
            const session = await authService.createAccount(data);
            setError(session);
            if (!session) {
                navigate("/login");
            }
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                {/* <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo />
                    </span>
                </div> */}
                <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign up your account
                </h2>
                <p className="mt-2 text-center text-base text-black/60">
                    already have an account?
                    <span> </span>
                    <Link to="/login">
                        <Button className="px-8 py-1 bg-white border-gray-600 border-[1.5px] text-blue-600">
                            Log In
                        </Button>
                    </Link>
                </p>
                {error && (
                    <p className="text-red-600 text-center">{error}</p>
                )}
                <form className='mt-8' onSubmit={handleSubmit(onSubmitHandler)}>
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
                            className="w-full p-2 bg-blue-500"
                            type="submit"
                        >
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
