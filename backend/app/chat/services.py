from app.chat.utils.tool_definitions import tool_definitions
from app.chat.utils.prompts import AGENT_PROMPT
from openai import OpenAI
from pathlib import Path
from dotenv import load_dotenv
from composio import Composio
import os
import logging

# logging stuff
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)
# load env
load_dotenv(Path("../../.env"))


class ChatService:
    def __init__(self):
        self.chat_history: list[dict] = []
        self.model_name: str = "gpt-4.1-mini"
        self.tools = tool_definitions
        self.composio = Composio()
        self.user_id = "0000-1111-2222"
        self.llm: OpenAI = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        if not self.chat_history:
            self.add_chat_history(role="developer", message=AGENT_PROMPT)
