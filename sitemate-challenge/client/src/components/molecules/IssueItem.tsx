import React from 'react';

interface IssueItemProps {
    title: string;
    description: string;
    onEdit: () => void;
    onDelete: () => void;
}

const IssueItem: React.FC<IssueItemProps> = ({ title, description, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{title}</td>
            <td>{description}</td>
            <td>
                <button className="edit-button" onClick={onEdit}>Edit</button>
                <button className="delete-button" onClick={onDelete}>Delete</button>
            </td>
        </tr>
    );
};

export default IssueItem;