from flask import Flask, request
# cors is used to relax security, only for development
from flask_cors import CORS
import pymongo
# Needed to verify the server is who it says it is. Mac won't work without and Cloud stuff might not either.
import certifi

# create a Flask app
app = Flask(__name__)
CORS(app)

client = pymongo.MongoClient("mongodb+srv://user:pass@talaash.zp2uq.mongodb.net/usersdb?retryWrites=true&w=majority", tlsCAFile=certifi.where())
Users_DB = client.get_database('user_information')
Account_Info = Users_DB.users
Account_Info.insert_one({"username":"name", "password":"pass"})


# A simple home page to backend server
@app.route('/')
def index():
    return "<h1>Welcome to our server !!</h1>"

@app.route('/hello', methods=["GET"])
def hello():
    count = int(request.args.get('count'))
    phrases = ["a","b","c","d"]
    print("count", count)
    print("current phrase", phrases[count%4])
    return phrases[count%4]
