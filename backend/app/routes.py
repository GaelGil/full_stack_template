from user.controllers import auth, users, profile

def register_routes(app):
    app.register_blueprint(auth)
    app.register_blueprint(users)
    app.register_blueprint(profile)