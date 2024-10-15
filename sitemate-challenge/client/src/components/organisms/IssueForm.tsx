import React, { useState, useEffect } from 'react';
import { Issue } from '../../types/issue';
import './IssueForm.css';

interface IssueFormProps {
    selectedIssue: Issue | null;
    onSubmit: (issue: Omit<Issue, 'id'>) => void;
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
        const issueData = { title, description };
        onSubmit(issueData);
    };

    return (
        <form className="issue-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="submit-button">Submit</button>
        </form>
    );
};

export default IssueForm;
