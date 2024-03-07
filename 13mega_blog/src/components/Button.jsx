import React from "react";
function Button({
    children,
    className = "",
    type = "button",
    onClickHandler,
    bgColor='blue',
    ...props
}) {
    return (
        <input
            type={type}
            value={children}
            onClick={onClickHandler}
            className={`shadow-md rounded-xl border-none bg-${bgColor}-700 hover: bg-${bgColor}-400 hover:scale-95 ${className}`}
            {...props}
        />
    );
}

export default Button;
