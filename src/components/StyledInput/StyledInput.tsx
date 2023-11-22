import { TextField } from "@radix-ui/themes";
import React from "react";
import "./StyledInput.css";

interface Props {
    id: string;
    label: string;
    type?: "text" | "password" | "email" | "number";
    placeholder?: string;
    value?: string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
}

const StyledInput: React.FC<Props> = ({
    id,
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
    ...props
}) => {
    return (
        <div className="input-container">
            <label className="input-label" htmlFor={id}>
                {label}
                {required && <span className="required-asterisk">*</span>}
            </label>
            <TextField.Input
                {...props}
                className="styled-input"
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export { StyledInput };
