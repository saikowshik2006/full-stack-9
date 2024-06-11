from django.urls import path
from .views import (
    article_list_create, ArticleRetrieveUpdateDestroyView,
    registration_list_create, RegistrationRetrieveUpdateDestroyView
)

urlpatterns = [
    # Article URLs
    path('articles/', article_list_create.as_view(), name='article-list-create'),
    path('articles/<int:pk>/', ArticleRetrieveUpdateDestroyView.as_view(), name='article-detail'),

    # Registration URLs
    path('registrations/', registration_list_create.as_view(), name='registration-list-create'),
    path('registrations/<int:pk>/', RegistrationRetrieveUpdateDestroyView.as_view(), name='registration-detail'),
]
