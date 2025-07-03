from app.extensions import db
from sqlalchemy.orm import relationship

friends = db.Table(
    'friends',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('friend_id', db.Integer, db.ForeignKey('users.id'), primary_key=True)
)

class User(db.Model):
    __tablename__ = 'users' 

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)

    # friends relationship
    friends = db.relationship(
        'User',
        secondary=friends,
        primaryjoin=id==friends.c.user_id,
        secondaryjoin=id==friends.c.friend_id,
        backref='friend_of'
    )

    # posts relationship
    posts = db.relationship('Post', backref='author', lazy=True)

