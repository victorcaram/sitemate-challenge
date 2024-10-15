import React from 'react';
import Input from '../atoms/Input';

interface IssueFormFieldsProps {
    title: string;
    description: string;
    setTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const IssueFormFields: React.FC<IssueFormFieldsProps> = ({ title, description, setTitle, setDescription }) => {
    return (
        <div>
            <Input value={title} onChange={setTitle} type="text" placeholder="Title" />
            <Input value={description} onChange={setDescription} type="text" placeholder="Description" />
        </div>
    );
};

export default IssueFormFields;
