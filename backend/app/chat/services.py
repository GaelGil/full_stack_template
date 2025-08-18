from app.chat.utils.tool_definitions import tool_definitions  # type: ignore
from app.chat.utils.prompts import PROMPT
from composio import Composio  # type: ignore


class ChatService:
    def __init__(self):
        self.model_name = ""
        self.composio = Composio()
        self.user_id = "0000-1111-2222"
        self.tools = tool_definitions
        self.system_prompt = PROMPT

    def process_message(self, user_message):
        """ """
        print("\n=== CHAT SERVICE: Processing new message ===")
        print(f"Model: {self.model_name}")
        return user_message
