from django.db import models
from django.contrib.auth.models import User 

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
    # age = models.IntegerField()
    # duration = models.IntegerField()
    # transaction_count = models.IntegerField()

class loanrepay(models.Model):
    id = models.IntegerField(primary_key = True)
    paid = models.IntegerField()
    left = models.IntegerField()
    months_paid = models.IntegerField()
    months_left = models.IntegerField()
    emi_amount = models.IntegerField()
