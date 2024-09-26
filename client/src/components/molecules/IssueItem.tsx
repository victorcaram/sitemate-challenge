import React from 'react';
import Button from '../atoms/Button';

interface IssueItemProps {
    title: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
}

const IssueItem: React.FC<IssueItemProps> = ({ title, description, onEdit, onDelete }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button onClick={onEdit} label="Edit" />
            <Button onClick={onDelete} label="Delete" />
        </div>
    );
};

export default IssueItem;
