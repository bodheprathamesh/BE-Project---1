from rest_framework import serializers
from .models import creditinformation
class infoserializer(serializers.Serializer):
    jan = serializers.IntegerField()
    feb = serializers.IntegerField()
    mar = serializers.IntegerField()
    apr = serializers.IntegerField()
    may = serializers.IntegerField()
    jun = serializers.IntegerField()
    jul = serializers.IntegerField()
    aug = serializers.IntegerField()
    sep = serializers.IntegerField()
    oct = serializers.IntegerField()
    nov = serializers.IntegerField()
    dec = serializers.IntegerField()
    age = serializers.IntegerField()
    age = serializers.IntegerField()
    duration = serializers.IntegerField()
    transaction_count = serializers.IntegerField()

    def create(self, validated_data):
        return creditinformation.objects.create(**validated_data)



    