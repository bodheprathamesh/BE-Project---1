from django.shortcuts import render
import io
from rest_framework.parsers import JSONParser
from .models import creditinformation
from .serializers import infoserializer
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
import pandas as pd
import tensorflow as tf
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
        print(python_data)
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
