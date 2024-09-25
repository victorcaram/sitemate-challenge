from django.test import TestCase
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