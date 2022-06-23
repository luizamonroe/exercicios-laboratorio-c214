import requests
import json


class API(object):
    def __init__(self, url):
        self.url = url

        
    def get(self):
        request = requests.get(f"{self.url}/list/")
        print('-'*6 + "GET" + '-'*6)
        for aux in request.json():
            print(json.dumps(aux, indent=4, sort_keys=True))


    def post(self, data):
        request = requests.post(f"{self.url}/create/", json=data)
        print('-'*6 + "POST" + '-'*6)
        print(json.dumps(request.json(), indent=4, sort_keys=True))


    def put(self, data):
        request = requests.put(f"{self.url}/update/", json=data)
        print('-'*6 + "PUT" + '-'*6)
        print(json.dumps(request.json(), indent=4, sort_keys=True))


    def delete(self, data):
        request = requests.delete(f"{self.url}/delete/", json=data)
        print('-'*6 + "DELETE" + '-'*6)
        print(request.text)
        