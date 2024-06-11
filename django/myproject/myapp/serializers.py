from rest_framework import serializers
from .models import articles, registrations

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = articles
        fields = ['id', 'title', 'content']

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = registrations
        fields = ['id', 'firstname', 'lastname', 'email', 'dob', 'phonenumber', 'username', 'password']
