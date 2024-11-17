import os

from dotenv import load_dotenv

load_dotenv()


class Config:
    API_KEY = os.getenv('API_KEY')
    DEBUG = False
    TESTING = False
    SQLALCHEMY_DATABASE_URI = 'sqlite:///app.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class ProductionConfig(Config):
    DATABASE_URL = os.getenv('DATABASE_URL') # In the config file you can give the URL of DB for PROD


class DevelopmentConfig(Config):
    DEBUG = True
    TESTING = True
