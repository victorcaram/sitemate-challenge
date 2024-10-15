import axios from 'axios';
import { Issue } from '../types/issue';

const BASE_URL = 'http://localhost:8000/api/issues/';

export const fetchIssues = async (): Promise<Issue[]> => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching issues:', error);
        throw error;
    }
};

export const createIssue = async (issue: Omit<Issue, 'id'>): Promise<Issue> => {
    try {
        const response = await axios.post(BASE_URL, issue);
        return response.data;
    } catch (error) {
        console.error('Error creating issue:', error);
        throw error;
    }
};

export const updateIssue = async (issueId: number, issue: Omit<Issue, 'id'>): Promise<Issue> => {
    try {
        const response = await axios.put(`${BASE_URL}${issueId}/`, issue);
        return response.data;
    } catch (error) {
        console.error('Error updating issue:', error);
        throw error;
    }
};

export const deleteIssue = async (issueId: number): Promise<void> => {
    try {
        await axios.delete(`${BASE_URL}${issueId}/`);
    } catch (error) {
        console.error('Error deleting issue:', error);
        throw error;
    }
};