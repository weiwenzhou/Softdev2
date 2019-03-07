from flask import Flask, render_template, request, session, url_for, redirect, flash
import os

app = Flask(__name__)
app.secret_key = os.urandom(32)

@app.route("/")
def index():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0")
