from flask import Flask

def create_app(config_class=None):
    app = Flask(__name__)
    if config_class:
        app.config.from_object(config_class)

    from .routes.auth import auth_bp
    from .routes.main import main_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(main_bp)

    return app
