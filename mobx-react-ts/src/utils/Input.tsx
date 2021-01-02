import React from 'react';

interface InputProps {
    value: string | undefined;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface FormProps {
    onSubmit: (event: React.FormEvent) => void;
}

export const NumberInput: React.FunctionComponent<InputProps> = ({ value, onChange }) =>
    <input type="text" pattern="[0-9]*" value={value} onChange={onChange} />;

export const Form: React.FunctionComponent<FormProps> = ({ children, onSubmit }) => <form onSubmit={onSubmit}>{children}</form>;