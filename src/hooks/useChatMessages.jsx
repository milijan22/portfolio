import { useState, useEffect } from "react";
import allMessages from "C:/portfolio/src/components/Chat/allMessages.jsx";
import getCurrentTime from "../utils/timeUtil";

function useChatMessages(delay = 3000) {
  const [messages, setMessages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < allMessages.length) {
      const timeout = setTimeout(() => {
        const time = getCurrentTime();
        setMessages((prev) => [...prev, { text: allMessages[index], time }]);
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, delay]);

  return messages;
}

export default useChatMessages;
