from flask import Flask
from flask_cors import CORS
from app.core.database import db
from app.api.auth_routes import auth_bp
from config import Config
from app.api.ai_routes import ai_bp

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    CORS(app)

    db.init_app(app)

    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(ai_bp, url_prefix="/ai")

    return app