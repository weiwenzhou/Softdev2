from flask import Flask, render_template, request, session, url_for, redirect, flash
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/ip")
def connect():
    try:
        connection = pymongo.MongoClient(request.form['ip'])
        db = connection.WorldWarZ
        collection = db.movies
    except:
        flash("Not a valid ip address to connect to")
        print("Not a valid ip address to connect to")

if __name__ == "__main__":
    app.debug = True
    app.run()
