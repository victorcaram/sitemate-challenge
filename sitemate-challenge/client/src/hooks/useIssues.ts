import { useState, useEffect } from 'react';
import { fetchIssues, createIssue, updateIssue, deleteIssue } from '../services/issueService';
import { Issue } from '../types/issue';

export const useIssues = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const loadIssues = async () => {
        setLoading(true);
        try {
            const data = await fetchIssues();
            setIssues(data);
        } catch (err) {
            setError('Failed to load issues');
        } finally {
            setLoading(false);
        }
    };

    const handleCreateIssue = async (newIssue: Omit<Issue, 'id'>) => {
        try {
            await createIssue(newIssue);
            await loadIssues();
        } catch (err) {
            setError('Failed to create issue');
        }
    };

    const handleUpdateIssue = async (issueId: number, updatedIssue: Omit<Issue, 'id'>) => {
        try {
            await updateIssue(issueId, updatedIssue);
            await loadIssues();
        } catch (err) {
            setError('Failed to update issue');
        }
    };

    const handleDeleteIssue = async (issueId: number) => {
        try {
            await deleteIssue(issueId);
            await loadIssues();
        } catch (err) {
            setError('Failed to delete issue');
        }
    };

    useEffect(() => {
        loadIssues();
    }, []);

    return {
        issues,
        loading,
        error,
        handleCreateIssue,
        handleUpdateIssue,
        handleDeleteIssue,
    };
};