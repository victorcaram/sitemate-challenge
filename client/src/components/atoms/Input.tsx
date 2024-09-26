import React from 'react';

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, type, placeholder }) => {
    return (
        <input
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    );
};

export default Input;
