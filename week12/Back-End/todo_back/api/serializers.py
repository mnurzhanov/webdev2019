from rest_framework import serializers
from api.models import TaskList,Task
from datetime import datetime


class TasklistSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        # {'name': 'new category 3'}
        # name='new category 3'
        category = TaskList(**validated_data)
        category.save()
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class TasklistSerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    class Meta:
        model = TaskList
        fields = ('id', 'name')
        # fields = '__all__'


class TaskSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    #created_at = serializers.DatetimeField()
    #due_on = serializers.DatetimeField()
    status=serializers.CharField()
    tasklist=TasklistSerializer2()
