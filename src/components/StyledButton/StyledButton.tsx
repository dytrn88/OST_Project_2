import React, { MouseEventHandler } from "react";
import "./StyledButton.css";

interface Props {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

const StyledButton: React.FC<Props> = ({
    text,
    onClick,
    type = "button",
    disabled = false,
    ...props
}) => {
    return (
        <button
            className="styled-button"
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...props}
        >
            {text}
        </button>
    );
};

export { StyledButton };
