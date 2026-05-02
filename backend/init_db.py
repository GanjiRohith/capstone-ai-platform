from app import create_app
from app.core.database import db
from app.models.user import User
from app.core.security import hash_password

app = create_app()

with app.app_context():
    print("Creating tables...")
    db.create_all()

    # ✅ Insert dummy data safely
    existing_user = User.query.filter_by(email="demo@gmail.com").first()

    if not existing_user:
        print("Inserting dummy user...")

        user = User(
            email="demo@gmail.com",
            password=hash_password("1234")
        )

        db.session.add(user)
        db.session.commit()

        print("Dummy user inserted")
    else:
        print("Dummy user already exists")

    print("DB setup complete")
