from django.shortcuts import render
import io
from rest_framework.parsers import JSONParser
from .models import creditinformation, loanrepay
from .serializers import infoserializer
from .serializers import laonrepay as loanobjserializer
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
import pandas as pd
import tensorflow as tf
from django.contrib.auth.models import User 
# from .utils import send_email_notifications
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.


@csrf_exempt
# @api_view(['POST']) 
# @permission_classes([IsAuthenticated])
def creditinfoapi(request):
    if request.method == 'GET':
        # json_data = request.body
        # stream = io.BytesIO(json_data)
        # python_data = JSONParser().parse(stream)
        stu = creditinformation.objects.all()
        serializer = infoserializer(stu, many = True)
        json_data = JSONRenderer().render(serializer.data)
        return HttpResponse(json_data,content_type = 'application/json')
    elif request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        # print(request.session['user_id'])
        serializer = infoserializer(data = python_data)
        if serializer.is_valid():
            serializer.save()
            prediction_value = result_function(python_data)
            str_val = str(prediction_value)
            print(prediction_value)
            res = {'msg' : str_val }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data,content_type = 'application/json')
        json_data = JSONRenderer().render(serializer.errors)
        return HttpResponse(json_data,content_type = 'application/json')     


def getPredictions(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec):

    print("in getpredictions")


    model = tf.keras.models.load_model('lstm_model_2.h5')
    # model = pickle.load(open('ml_model.sav', 'rb'))
    # scaled = pickle.load(open('scaler.sav', 'rb'))

    input_data = {
        "Jan": [jan],
        "Feb": [feb],
        "Mar": [mar],
        "Apr": [apr],
        "May": [may],
        "Jun": [jun],
        "Jul": [jul],
        "Aug": [aug],
        "Sept": [sep],
        "Oct": [oct],
        "Nov": [nov],
        "Dec": [dec],
    }

    print(input_data)

    df = pd.DataFrame(input_data)

    prediction = model.predict(
        df
    )

    print(prediction)
    
    # print(type(prediction[0]))
    return prediction[0][0]
    
def result_function(data):
    print("in result function")


    jan = int(data['jan'])
    feb = int(data['feb'])
    mar = int(data['mar'])
    apr = int(data['apr'])
    may = int(data['may'])
    jun = int(data['jun'])
    jul = int(data['jul'])
    aug = int(data['aug'])
    sep = int(data['sep'])
    oct = int(data['oct'])
    nov = int(data['nov'])
    dec = int(data['dec'])

    result = getPredictions(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec)

    # print(result)

    return result

@csrf_exempt
def loan_repayment(request):
    if request.method == "POST":
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        R = 12 / 12 /100
        principal_amount = int(python_data['actualAmount'])
        duration = int(python_data['duration'])
        calculate_emi = (principal_amount * R * (1+R)**duration)/((1+R)**duration-1)
        instance_emi = loanrepay(id = python_data['id'], paid = 0, left = python_data['actualAmount'],months_left = duration, months_paid = 0, emi_amount =calculate_emi)        
        instance_emi.save()
        str_val = str(calculate_emi)
        res = {'msg' : str_val,
            'months' : str(duration) }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data,content_type = 'application/json')


@csrf_exempt
def monthly_emi(request):
    # id = request.session["user_id"]
    if request.method == "POST":
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = int(python_data['id'])
        money_paid_data = loanrepay.objects.get(id = id)
        print(money_paid_data)
        if money_paid_data.months_left > 0 : 
            money_paid_data.paid += money_paid_data.emi_amount
            money_paid_data.left -= money_paid_data.emi_amount
            money_paid_data.months_paid += 1
            money_paid_data.months_left -= 1
            money_paid_data.save()
        print(money_paid_data)
        money_paid_data = loanrepay.objects.get(id = id)
        result = loanobjserializer(money_paid_data)
        return JsonResponse(result.data)
        # res = {'msg' : "Thanks For Pay ! See you next month" }
        # json_data = JSONRenderer().render(res)
        # return HttpResponse(json_data,content_type = 'application/json')

    
@csrf_exempt
def show_monthly_emi_details(request):
    # id = request.session["user_id"]
    if request.method == "POST":
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        print("$$$$$$$$$$$$$$$$$$$$$$")
        print(python_data)
        print("$$$$$$$$$$$$$$$$$$$$$$")
        id = int(python_data['id'])
        money_paid_data = loanrepay.objects.get(id = id)
        result = loanobjserializer(money_paid_data)
        return JsonResponse(result.data)
    
@csrf_exempt
def mail_send(request):
    subject = "Loan Repayment"
    message = "Loan Due with amount 4806"
    from_email = settings.EMAIL_HOST_USER
    recipient_list = ["atharvamohite8902@gmail.com"]
    send_mail(subject,message,from_email,recipient_list,fail_silently=False)
    res = {'msg' : "Thanks For Pay ! See you next month" }
    json_data = JSONRenderer().render(res)
    return HttpResponse(json_data,content_type = 'application/json')

    