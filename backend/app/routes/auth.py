from flask import Blueprint, request, jsonify
from app.models.user import User
from app.extensions import db, bcrypt
from flask_jwt_extended import create_access_token

auth = Blueprint('auth', __name__, url_prefix="/auth")

@auth.route('/signup', methods=['POST'])
def signup():
    return jsonify({'msg': 'signup succesful'})

@auth.route('/login', methods=['POST'])
def login():
    return jsonify({'msg': 'login succesful'})

