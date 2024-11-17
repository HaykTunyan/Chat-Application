from flask import Flask
from flask_cors import CORS

from app.models import db
from app.routes import main


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"
    CORS(app)
    db.init_app(app)
    app.register_blueprint(main, url_prefix='/')

    return app

