import Bubble from "./Bubble";

const ChatMessage = ({
  text,
  time,
  isFirst,
  userName = "Milijan Knezevic",
}) => (
  <Bubble isFirst={isFirst}>
    <div className="flex items-center gap-2">
      <p className="font-medium">{userName}</p>
      <span className="text-sm font-normal text-gray-400">{time}</span>
    </div>
    <p className="mt-1">{text}</p>
    <span className="text-sm font-medium text-gray-400 mt-1">Delivered</span>
  </Bubble>
);

export default ChatMessage;
