from flask import Blueprint, request, jsonify
from app.agents.chat_agent import chat_agent

ai_bp = Blueprint("ai", __name__)

@ai_bp.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_input = data.get("message")

    response = chat_agent(user_input)

    return jsonify({"response": response})