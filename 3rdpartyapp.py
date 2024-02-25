import requests
import json

URL = "http://127.0.0.1:8000/creditapi/"

def post_data():
    data = {
        'jan' : 1001,
        'feb' : 1000,
        'mar' : 1000,
        'apr' : 1000,
        'may' : 1000,
        'jun' : 1000,
        'jul' : 1000,
        'aug' : 1000,
        'sep' : 1000,
        'oct' : 1000,
        'nov' : 1000,
        'dec' : 1000,
        'age' : 25,
        'duration' : 8,
        'transaction_count' : 20
    }
    json_data = json.dumps(data)
    r = requests.post(url = URL, data = json_data)
    data = r.json()
    print(data)


post_data()