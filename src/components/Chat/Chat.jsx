import { useEffect } from "react";
import useChatMessages from "../../hooks/useChatMessages";
import useAvatar from "../../hooks/useAvatar";
import hostImg from "../../assets/host.png";
import Avatar from "./Avatar";
import ChatMessage from "./ChatMessage";

function Chat() {
  const messages = useChatMessages();
  const { isOpen, toggleOpen, unreadCount, setUnreadCount, lastSeenIndex } =
    useAvatar(0);
  useEffect(() => {
    if (!isOpen) {
      setUnreadCount(messages.length - lastSeenIndex.current);
    } else {
      setUnreadCount(0);
      lastSeenIndex.current = messages.length;
    }
  }, [messages.length, isOpen, setUnreadCount, lastSeenIndex]);

  const handleToggleOpen = () => toggleOpen(messages.length);

  return (
    <section>
      <Avatar
        src={hostImg}
        alt="Avatar"
        unreadCount={unreadCount}
        onClick={handleToggleOpen}
        className="left-5 z-50 fixed"
      />

      {isOpen && (
        <div className="absolute left-20 top-15 z-10">
          {messages.map((msg, i) => (
            <ChatMessage
              key={i}
              text={msg.text}
              time={msg.time}
              isFirst={i === 0}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Chat;
