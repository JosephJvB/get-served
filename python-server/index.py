from flask import Flask, render_template

api = Flask(__name__, template_folder="../static", static_folder="../static")

@api.route("/")
def send_files():
  api.send_static_file("index.js")
  return render_template("index.html")

api.run(port=3002)