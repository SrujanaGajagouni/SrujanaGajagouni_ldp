import React from "react";

export interface InputProps {
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => {
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default Input;
