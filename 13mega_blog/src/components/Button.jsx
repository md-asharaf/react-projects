import React from "react";
function Button({
    children,
    className = "",
    type = "button",
    onClickHandler,
    ...props
}) {
    return (
        <input
            type={type}
            value={children}
            onClick={onClickHandler}
            className={`shadow-md rounded-xl border-none hover:scale-95 hover:opacity-90 ${className}`}
            {...props}
        />
    );
}

export default Button;
