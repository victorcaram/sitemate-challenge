from rest_framework import generics
from .models import Issue
from .serializers import IssueSerializer

class IssueListCreate(generics.ListCreateAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer

class IssueRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Issue.objects.all()
    serializer_class = IssueSerializer
