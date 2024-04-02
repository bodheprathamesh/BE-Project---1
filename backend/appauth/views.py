from django.shortcuts import render
from django.contrib.auth.models import User 
import io
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login, logout

# Create your views here.
@csrf_exempt
def register(request):
    print("here we are")
    if request.method == 'GET':
        pass
    elif request.method =='POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        print(python_data)
        if (User.objects.filter(username=python_data['username']).exists()):
            msg = "Username already exists"
            res = {'msg' : msg }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data,content_type = 'application/json')
        elif (User.objects.filter(email=python_data['email']).exists()):
            msg = "Email already exists"
            res = {'msg' : msg }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data,content_type = 'application/json')
        else:
            myuser = User.objects.create_user(python_data['username'], python_data['email'], python_data['password'])
            myuser.is_active = True
            myuser.save()
            msg = "Account created Successfully"
            res = {'msg' : msg }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data,content_type = 'application/json')


@csrf_exempt
def signin(request):
    if request.method == 'GET':
        pass
    elif request.method =='POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        print(python_data)
        my_user = authenticate(username = python_data['username'],password = python_data['password'])
        if my_user is not None:
            login(request ,my_user)
            msg = "Login Successfull"
            res = {'msg' : msg }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data,content_type = 'application/json')
        else:
            msg = "Invalid Credentials"
            res = {'msg' : msg }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data,content_type = 'application/json' , status = 400)


            


    
