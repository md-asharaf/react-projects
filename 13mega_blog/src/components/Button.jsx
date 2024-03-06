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
            className={`${className}`}
            {...props}
        />
    );
}

export default Button;
