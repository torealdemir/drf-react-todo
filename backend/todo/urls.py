from . import views
from rest_framework import routers

from django.contrib import admin
from django.urls import path, include 

router = routers.DefaultRouter()
router.register('todo', views.ToDoWievset, basename='todo')

urlpatterns = [
    
]

urlpatterns += router.urls