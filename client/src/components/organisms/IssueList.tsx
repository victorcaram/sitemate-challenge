import React, { useEffect, useState } from 'react';
import IssueItem from '../molecules/IssueItem';
import axios from 'axios';

interface IssueListProps {
    onEdit: (issue: any) => void;
}

const IssueList: React.FC<IssueListProps> = ({ onEdit }) => {
    const [issues, setIssues] = useState<any[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/issues/')
            .then(response => setIssues(response.data))
            .catch(error => console.error("Error fetching issues", error));
    }, []);

    const handleDelete = (id: number) => {
        axios.delete(`http://localhost:8000/api/issues/${id}/`)
            .then(() => setIssues(issues.filter(issue => issue.id !== id)))
            .catch(error => console.error("Error deleting issue", error));
    };

    return (
        <div>
            {issues.map(issue => (
                <IssueItem
                    key={issue.id}
                    title={issue.title}
                    description={issue.description}
                    onEdit={() => onEdit(issue)}
                    onDelete={() => handleDelete(issue.id)}
                />
            ))}
        </div>
    );
};

export default IssueList;
