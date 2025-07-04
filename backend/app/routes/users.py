from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models.user import User
users = Blueprint('users', __name__)

@users.route('/profile//<int:user_id>/friends', methods=['GET'])
@jwt_required()
def get_user_friends(user_id):
    current_user_id = get_jwt_identity()
    if user_id != int(current_user_id):   # convert to int for correct comparison
        return jsonify({'msg': 'unauthorized access'}), 403
    
    user = User.query.get(user_id)
    if not user:
        return jsonify({'msg': 'User not found'}), 404
    

    friends_list = [
        {
            'id': friend.id,
            'username': friend.username,
        }
        for friend in user.friends
    ]

    return jsonify({'friends': friends_list}), 200