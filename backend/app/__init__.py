from flask import Flask
from app.config import Config
from app.extensions import db, bcrypt, jwt, migrate
from app.routes import auth
from app.models import user
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(auth)
    CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

    return app