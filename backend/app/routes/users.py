from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

users = Blueprint('users', __name__, url_prefix='/users')

@users.route('/me', methods=['GET'])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()
    return jsonify({'msg': f'Your profile, user {user_id}'})
