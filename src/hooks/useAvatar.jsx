import { useState, useRef } from "react";

function useAvatar(initialUnread = 0) {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(initialUnread);
  const [position] = useState({
    x: 20,
    y: window.innerHeight - 100,
  });
  const lastSeenIndex = useRef(0);

  const toggleOpen = (messagesLength) => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      lastSeenIndex.current = messagesLength;
      setUnreadCount(0);
    }
  };

  return {
    isOpen,
    toggleOpen,
    unreadCount,
    setUnreadCount,
    position,
    lastSeenIndex,
  };
}

export default useAvatar;
