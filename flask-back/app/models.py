from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base)


class ChatHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_input = db.Column(db.String(), nullable=False)
    gemini_response = db.Column(db.String(), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_input": self.user_input,
            "gemini_response": self.gemini_response
        }
