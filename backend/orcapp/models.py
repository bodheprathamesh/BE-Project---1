from django.db import models

# Create your models here.

class creditinformation(models.Model):
    jan = models.IntegerField()
    feb = models.IntegerField()
    mar = models.IntegerField()
    apr = models.IntegerField()
    may = models.IntegerField()
    jun = models.IntegerField()
    jul = models.IntegerField()
    aug = models.IntegerField()
    sep = models.IntegerField()
    oct = models.IntegerField()
    nov = models.IntegerField()
    dec = models.IntegerField()
    age = models.IntegerField()
    duration = models.IntegerField()
    transaction_count = models.IntegerField()