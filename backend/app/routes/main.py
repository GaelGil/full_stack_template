from flask import Blueprint, render_template

# Create a Blueprint named 'main'
main_bp = Blueprint('main', __name__)

@main_bp.route("/")
def index():
    return render_template("index.html")

@main_bp.route("/about")
def about():
    return "<h2>About This App</h2>"
