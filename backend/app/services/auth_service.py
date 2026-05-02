from app.models.user import User
from app.core.database import db
from app.core.security import hash_password, verify_password

def create_user(email, password):
    hashed = hash_password(password)

    user = User(email=email, password=hashed)
    db.session.add(user)
    db.session.commit()

    return user

def authenticate_user(email, password):
    user = User.query.filter_by(email=email).first()

    if not user:
        return None

    if not verify_password(password, user.password):
        return None

    return user