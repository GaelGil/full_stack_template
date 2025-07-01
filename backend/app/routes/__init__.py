from .auth import auth
from .users import users
from .posts import posts

def register_routes(app):
    app.register_blueprint(auth)
    app.register_blueprint(users)
    app.register_blueprint(posts)
