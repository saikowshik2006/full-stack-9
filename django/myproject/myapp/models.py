# myapp/models.py

from django.db import models

class articles(models.Model):
    title = models.CharField(max_length=20)
    content = models.CharField(max_length=500)

class registrations(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=15)
    email = models.EmailField()
    dob = models.DateField()
    phonenumber = models.BigIntegerField()
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=128)