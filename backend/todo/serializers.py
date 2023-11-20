from rest_framework import serializers
from . import models


class ToDOSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'
        