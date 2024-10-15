import React, { useState } from 'react';
import IssueList from '../organisms/IssueList';
import IssueForm from '../organisms/IssueForm';
import { useIssues } from '../../hooks/useIssues';
import { Issue } from '../../types/issue';

const Home: React.FC = () => {
    const { issues, handleCreateIssue, handleUpdateIssue, handleDeleteIssue } = useIssues();
    const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

    const handleFormSubmit = (issue: Omit<Issue, 'id'>) => {
        if (selectedIssue) {
            handleUpdateIssue(selectedIssue.id, issue);
        } else {
            handleCreateIssue(issue);
        }
        setSelectedIssue(null);
    };

    return (
        <div>
            <h1>Create or Edit Issue</h1>
            <IssueForm selectedIssue={selectedIssue} onSubmit={handleFormSubmit} />

            <h2>List of Issues</h2>
            <IssueList issues={issues} onEdit={setSelectedIssue} onDelete={handleDeleteIssue} />
        </div>
    );
};

export default Home;
