#Team MongoMadness - Puneet Johal, Wei Wen Zhou, Stefan Tan
#SoftDev2 pd8
#K08 -- Ay Mon, Go Git It From Yer Flask
#2019-03-07

from flask import Flask, render_template, request, session, url_for, redirect, flash
import os
import pymongo
import json

app = Flask(__name__)
app.secret_key = os.urandom(32)

SERVER_ADDR = "104.248.49.56"
connection = pymongo.MongoClient(SERVER_ADDR)
connection.drop_database("WorldWarZ")
db = connection.WorldWarZ
collection = db.movies

with open('data/movies.json') as f:
    lines = f.read()
    data = json.loads(lines)
    collection.insert_many(data)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/ip", methods=['POST'])
def connect():
    #try:
    ip = request.form['ip']
    connection = pymongo.MongoClient(SERVER_ADDR)
    connection.drop_database("WorldWarZ")
    connection = pymongo.MongoClient(ip)
    db = connection.WorldWarZ
    collection = db.movies

    with open('data/movies.json') as f:
        lines = f.read()
        data = json.loads(lines)
        collection.insert_many(data)

    #except:
      #  flash("Not a valid ip address to connect to")
       # print("Not a valid ip address to connect to")

    return render_template("index.html")

@app.route("/searchName", methods=['POST'])
def queryName():
    results = []
    for doc in collection.find( {"title": request.form['title']} ):
        results.append(doc)
    return render_template("index.html", movies=results)

@app.route("/searchYear", methods=['POST'])
def queryYear():
    results = []
    for doc in collection.find( {"year": int(request.form['year'])} ):
        results.append(doc)
    return render_template("index.html", movies=results)

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0")
