import argparse
import requests
import time
import hashlib
import json

def load_json(path):
  with open(path) as f:
    return json.load(f)

response = requests.get('https://gateway.marvel.com:443/v1/public/characters/1009148/comics?apikey=9c196989b2085c5747b0f8742cc479d2')
print(response)