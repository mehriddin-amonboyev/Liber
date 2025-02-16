import React from "react";
import clsx from "clsx";

export const Button = ({
    children,
    type,
    disabled,
    startIcon,
    endIcon,
    variant,
    className,
    ...props
}) => {
    return (
        <button
            type={type}
            className={clsx(
                "font-bold  text-[18px] cursor-pointer",
                {
                    "bg-primary rounded-[14px] px-[24px] text-white": variant === "birinchi",
                    "bg-secondary rounded-[14px] px-[24px] text-text-color": variant === "ikkinchi",
                    "w-[57px] h-[27px] bg-white px-[5px] py-[8px] rounded-[5px]": variant === "uchinchi",
                },
                className
            )}
            {...props}
        >
            <span className="flex items-center">
                <span> {startIcon} </span>
                {children}
                <span> {endIcon} </span>
            </span>
        </button >
    )
}