from flask import Blueprint, request, jsonify
from app.models.user import User
from app.extensions import db, bcrypt
from flask_jwt_extended import create_access_token
from sqlalchemy.exc import IntegrityError

posts = Blueprint('posts', __name__, url_prefix="/posts")

@posts.route('/posts', methods=['GET'])
def get_posts():
    return jsonify({'msg': 'Posts'})


