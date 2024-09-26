import React, { useState, useEffect } from 'react';
import IssueFormFields from '../molecules/IssueFormFields';
import Button from '../atoms/Button';
import axios from 'axios';

interface IssueFormProps {
    selectedIssue: any | null;
    onSubmit: (issue: any) => void;
}

const IssueForm: React.FC<IssueFormProps> = ({ selectedIssue, onSubmit }) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        if (selectedIssue) {
            setTitle(selectedIssue.title);
            setDescription(selectedIssue.description);
        } else {
            setTitle('');
            setDescription('');
        }
    }, [selectedIssue]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const data = { title, description };

        if (selectedIssue) {
            axios.put(`http://localhost:8000/api/issues/${selectedIssue.id}/`, data)
                .then(response => onSubmit(response.data))
                .catch(error => console.error("Error updating issue", error));
        } else {
            axios.post('http://localhost:8000/api/issues/', data)
                .then(response => onSubmit(response.data))
                .catch(error => console.error("Error creating issue", error));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <IssueFormFields
                title={title}
                description={description}
                setTitle={(e) => setTitle(e.target.value)}
                setDescription={(e) => setDescription(e.target.value)}
            />
            <Button onClick={() => { }} label={selectedIssue ? "Update" : "Create"} />
        </form>
    );
};

export default IssueForm;
