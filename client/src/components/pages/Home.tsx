import React, { useState } from 'react';
import IssueList from '../organisms/IssueList';
import IssueForm from '../organisms/IssueForm';

const Home: React.FC = () => {
    const [selectedIssue, setSelectedIssue] = useState<any | null>(null);

    const handleFormSubmit = (issue: any) => {
        setSelectedIssue(null);
    };

    return (
        <div>
            <IssueForm selectedIssue={selectedIssue} onSubmit={handleFormSubmit} />
            <IssueList onEdit={setSelectedIssue} />
        </div>
    );
};

export default Home;
