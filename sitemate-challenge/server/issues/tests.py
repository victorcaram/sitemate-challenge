from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Issue

class IssueModelTest(TestCase):

    def setUp(self):
        self.issue = Issue.objects.create(
            title="Test Issue",
            description="This is a test issue description."
        )

    def test_issue_object_creation(self):
        """Test that an Issue object is created properly."""
        self.assertEqual(self.issue.title, "Test Issue")
        self.assertEqual(self.issue.description, "This is a test issue description.")
        self.assertIsInstance(self.issue, Issue)

class IssueAPITest(APITestCase):

    def setUp(self):
        self.issue = Issue.objects.create(
            title="Test Issue",
            description="This is a test issue description."
        )
        self.second_issue = Issue.objects.create(
            title="Second Test Issue",
            description="This is a second test issue description."
        )
        self.issue_list_url = reverse('issue-list-create')
        self.issue_detail_url = reverse('issue-detail', kwargs={'pk': self.issue.pk})
        self.second_issue_detail_url = reverse('issue-detail', kwargs={'pk': self.second_issue.pk})

    def test_get_issue_list(self):
        """Test GET request to retrieve all issues."""
        response = self.client.get(self.issue_list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)
        self.assertEqual(response.data[0]['title'], "Test Issue")
        self.assertEqual(response.data[1]['title'], "Second Test Issue")

    def test_create_issue(self):
        """Test POST request to create a new issue."""
        data = {
            'title': 'Third New Issue',
            'description': 'This is a new issue.'
        }
        response = self.client.post(self.issue_list_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Issue.objects.count(), 3)
        self.assertEqual(Issue.objects.last().title, 'Third New Issue')

    def test_get_issue_detail(self):
        """Test GET request to retrieve a single issue."""
        response = self.client.get(self.issue_detail_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['title'], "Test Issue")

    def test_update_issue(self):
        """Test PUT request to update an issue."""
        data = {
            'title': 'Updated Issue',
            'description': 'This is an updated issue description.'
        }
        response = self.client.put(self.issue_detail_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.issue.refresh_from_db()
        self.assertEqual(self.issue.title, 'Updated Issue')

    def test_delete_issue(self):
        """Test DELETE request to delete an issue."""
        response = self.client.delete(self.issue_detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Issue.objects.count(), 1)
        response = self.client.delete(self.second_issue_detail_url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Issue.objects.count(), 0)
