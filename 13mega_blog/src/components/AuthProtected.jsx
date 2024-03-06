import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AuthProtected({ children, authentication = true }) {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    useEffect(() => {
        if (authStatus === authentication) return;
        authentication ? navigate("/login") : navigate("/");
        setLoader(false);
    }, [authStatus, navigate, authentication]);
    return loader ? <div>Loading...</div> : <>{children}</>;
}

export default AuthProtected;
