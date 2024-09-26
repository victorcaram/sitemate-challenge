import React from 'react';
import IssueItem from '../molecules/IssueItem';
import { Issue } from '../../types/issue';
import './IssueList.css';

interface IssueListProps {
    issues: Issue[];
    onEdit: (issue: Issue) => void;
    onDelete: (id: number) => void;
}

const IssueList: React.FC<IssueListProps> = ({ issues, onEdit, onDelete }) => {
    return (
        <div className="issue-list">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map((issue) => (
                        <IssueItem
                            key={issue.id}
                            title={issue.title}
                            description={issue.description}
                            onEdit={() => onEdit(issue)}
                            onDelete={() => onDelete(issue.id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default IssueList;
