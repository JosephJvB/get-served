from flask import Flask, render_template

api = Flask(
  __name__, # ?
  template_folder="../static", # serve html from here
  static_folder="../static" # static assets are different to templates: js/css
)

# how to do a wildcard router?
@api.route("/")
def send_files(): # method can have any name?
  api.send_static_file("index.js")
  return render_template("index.html")

api.run(port=3002)