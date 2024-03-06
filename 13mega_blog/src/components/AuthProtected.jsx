import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthProtected({ children, authentication = true }) {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    useEffect(() => {
        setLoader(false);
        if (authStatus === authentication) return;
        if (authentication) navigate("/login");
        else navigate("/");
    }, [authStatus, navigate, authentication]);
    return loader ? <h1>Loading...</h1> : <>{children}</>;
}

export default AuthProtected;
