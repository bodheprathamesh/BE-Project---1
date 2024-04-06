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
import numpy as np
import subprocess
# Create your views here.

timeseries = [1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000,1000]

def prepare_data(timeseries,n_features):
    X,y = [], []
    for i in range(len(timeseries)):
        
        # find the end of this pattern
        end_ix = i + n_features
        # check if are beyond the sequence
        if end_ix > len(timeseries)-1:
            break
        # gather input and output parts of the pattern
        seq_x, seq_y = timeseries[i:end_ix], timeseries[end_ix]
        X.append(seq_x)
        y.append(seq_y)

    return np.array(X), np.array(y)

x,y = prepare_data(timeseries,3)

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


def next_12(model, monthly_profits):
    x_input = np.array(monthly_profits[1:12])
    print(x_input)
    temp_input = list(x_input)
    temp_output = []
    i = 0
    while (i<12):
        if (len(temp_input) > 11):
            x_input = np.array(temp_input[1:])
            x_input = x_input.reshape((1,11,1))
            yhat = model.predict(x_input,verbose = 0)
            temp_input.append(yhat[0][0])
            temp_input = temp_input[1:]
            temp_output.append(yhat[0][0])
            i = i + 1
        else:
            x_input = x_input.reshape((1,11,1))
            yhat = model.predict(x_input,verbose = 0)
            temp_input.append(yhat[0][0])
            temp_output.append(yhat[0][0])
            i = i + 1
        
    print(temp_output)
    return temp_output
        

def getPredictions(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec,months_array):

    print("in getpredictions")


    model = tf.keras.models.load_model('lstm_model_2.h5')
    model = tf.keras.models.load_model('lstm_model_2.h5')
    # model = pickle.load(open('ml_model.sav', 'rb'))
    # scaled = pickle.load(open('scaler.sav', 'rb'))

    # input_data = {
    #     "Jan": [jan],
    #     "Feb": [feb],
    #     "Mar": [mar],
    #     "Apr": [apr],
    #     "May": [may],
    #     "Jun": [jun],
    #     "Jul": [jul],
    #     "Aug": [aug],
    #     "Sept": [sep],
    #     "Oct": [oct],
    #     "Nov": [nov],
    #     "Dec": [dec],
    # }

    # print(input_data)

    # df = pd.DataFrame(input_data)

    # prediction = model.predict(
    #     df
    # )

    # print(prediction)
    
    # print(type(prediction[0]))
    # return prediction[0][0]

    res = next_12(model,months_array)

    return max(res)
    
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

    months_arary = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec]
    x,y = prepare_data(months_arary,11)
    print(x,y)
    np.save('xtrain.npy',x)
    np.save('ytrain.npy',y)
    subprocess.run(["python", "C:/Users/pbodh/OneDrive/Desktop/MSME/backend/lstm2.py"])

    result = getPredictions(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec,months_arary)

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
        money_paid_data.paid += money_paid_data.emi_amount
        money_paid_data.left -= money_paid_data.emi_amount
        money_paid_data.months_paid += 1
        money_paid_data.months_left -= 1
        money_paid_data.save()
        print(money_paid_data)
        res = {'msg' : "Thanks For Pay ! See you next month" }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data,content_type = 'application/json')

    
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
        # id = int(python_data['id'])
        money_paid_data = loanrepay.objects.get(id = 1)
        result = loanobjserializer(money_paid_data)
        return JsonResponse(result.data)