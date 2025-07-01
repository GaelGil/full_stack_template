from flask import Blueprint, request, jsonify
from app.models.user import User
from app.extensions import db, bcrypt
from flask_jwt_extended import create_access_token
from sqlalchemy.exc import IntegrityError

auth = Blueprint('auth', __name__, url_prefix="/auth")

@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': "username and password required"}), 400
    if User.query.filter_by(username=username).first():
        return jsonify({'error': 'username taken'}), 409
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)

    try: 
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': "database error"}), 500
    return jsonify({'msg': 'signup succesful'}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'error': "username and password required"}), 400
    
    user = User.query.filter_by(username=username).first()
    if not user or not bcrypt.check_password_hash(user.password, password)
        return jsonify({'error': 'invalid username or password'}), 401
    
    access_token = create_access_token(identity=user.id)
    return jsonify({
        'message': 'Login successful',
        'token': access_token,
        'user': {
            'id': user.id,
            'username': user.username
        }
    }), 200

