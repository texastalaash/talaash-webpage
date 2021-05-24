from flask import Flask, request
# cors is used to relax security, only for development
from flask_cors import CORS

# create a Flask app
app = Flask(__name__)
CORS(app)

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