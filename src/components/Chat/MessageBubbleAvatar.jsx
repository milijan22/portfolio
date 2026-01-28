const MessageBubbleAvatar = ({ avatarUrl, altText }) => {
  return (
    <>
      <img src={avatarUrl} alt={altText} className="rounded-full w-14 h-14" />
    </>
  );
};
export default MessageBubbleAvatar;
