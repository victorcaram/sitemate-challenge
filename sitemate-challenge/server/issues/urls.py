from django.urls import path
from . import views

urlpatterns = [
    path('issues/', views.IssueListCreate.as_view(), name='issue-list-create'),
    path('issues/<int:pk>/', views.IssueRetrieveUpdateDestroy.as_view(), name='issue-detail'),
]
