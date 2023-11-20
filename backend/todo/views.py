from django.shortcuts import render

from rest_framework import viewsets
from . import serializers
from . import models


class ToDoWievset(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.ToDOSerializer
# Create your views here.
