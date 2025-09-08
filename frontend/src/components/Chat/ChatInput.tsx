import { useState } from "react";
import type { ChatInputProps } from "../../types/Chat";
import { Textarea, Button, Group, Box } from "@mantine/core";

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box display={"flex"}>
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Ask me anything... (Press Enter to send, Shift+Enter for new line)"
        disabled={disabled}
        w={"80%"}
        radius="xl"
        ta={"center"}
      />
      <Button
        radius="xl"
        size="xl"
        onClick={handleSend}
        disabled={!message.trim() || disabled}
      >
        {disabled ? (
          <Group>
            <div className="animate-spin rounded h-4 w-4 border-b-2 border-secondary-300"></div>
          </Group>
        ) : (
          "Send"
        )}
      </Button>
    </Box>
  );
};

export default ChatInput;
