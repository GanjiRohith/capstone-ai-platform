from app.services.openai_service import chat_completion

def chat_agent(user_input):
    messages = [
        {"role": "system", "content": "You are a helpful AI assistant."},
        {"role": "user", "content": user_input}
    ]

    return chat_completion(messages)