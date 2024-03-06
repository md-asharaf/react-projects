import React from "react";
function Button({
    childrenText,
    className = "",
    type = "button",
    onClickHandler = () => {},
    ...props
}) {
    return (
        <input
            type={type}
            value={childrenText}
            onClick={onClickHandler}
            className={`${className}`}
            {...props}
        />
    );
}

export default Button;
