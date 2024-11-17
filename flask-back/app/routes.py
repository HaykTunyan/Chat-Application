import os
from dotenv import load_dotenv
from flask import Blueprint, request
import google.generativeai as genai

from flask import jsonify
from app.models import ChatHistory, db

main = Blueprint("main", __name__)


@main.route('/')
def home():
    return "Welcome to the home page"

@main.route('/api/v1/gemini', methods=['POST'])
def send_the_input_data():
    load_dotenv()
    api_key = os.getenv("API_KEY")

    if not api_key:
        return jsonify({"error": "API key not found in environment variables"}), 500

    genai.configure(api_key=api_key)
    model = genai.GenerativeModel("gemini-1.5-flash")

    data = request.json
    if not data or "input" not in data:
        return jsonify({"error": "No 'input' field provided in the request body"}), 400

    user_input = data["input"]
    response = model.generate_content(user_input)
    chat = ChatHistory(user_input=data['input'], gemini_response=response.text)

    db.session.add(chat)
    db.session.commit()
    return jsonify({"message": response.text}), 201


@main.route('/api/v1/chat-history', methods=['GET'])
def get_chat_history():
    chat_history = ChatHistory.query.all()
    return jsonify([chat.to_dict() for chat in chat_history])