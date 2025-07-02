from flask import Flask
from app.config import Config
from app.extensions import db, bcrypt, jwt, migrate, socketio
from app.routes import auth
from flask_cors import CORS
import os


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    migrate.init_app(app, db)  # for flask migrate
    socketio.init_app(app)
    with app.app_context():
        from app.models import user, post
    bcrypt.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}, supports_credentials=True)

    app.register_blueprint(auth)

    return app