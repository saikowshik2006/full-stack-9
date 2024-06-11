from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import articles, registrations
from .serializers import ArticleSerializer, RegistrationSerializer

# Article Views
@api_view(['GET', 'POST'])
def article_list_create(request):
    if request.method == 'GET':
        articles_list = articles.objects.all()
        serializer = ArticleSerializer(articles_list, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Registration Views
@api_view(['GET', 'POST'])
def registration_list_create(request):
    if request.method == 'GET':
        registrations_list = registrations.objects.all()
        serializer = RegistrationSerializer(registrations_list, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
