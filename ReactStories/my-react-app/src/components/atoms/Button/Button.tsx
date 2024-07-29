import React from "react";

export interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type = 'button', onClick, backgroundColor, ...props }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{ backgroundColor }} 
            {...props}
        >
            {text}
        </button>
    );
};

export default Button;
