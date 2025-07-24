import React from "react";

function Button({
    children,
    bgColor = "bg-blue-500",
    textColor = "text-white",
    padding = "px-4 py-2",
    borderRadius = "rounded",
    hoverColor = "hover:bg-blue-600",
    transition = "transition duration-300",
    className="",
    ...props


}){

    return(
        <button className={`${bgColor} ${textColor} ${padding} ${borderRadius} ${hoverColor} ${transition} ${className}`}
        {...props}>
            {children}  
        </button>
    )

}
export default Button;