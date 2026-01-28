const Avatar = ({ src, alt = "Avatar", unreadCount = 0, onClick }) => (
  <div
    onClick={onClick}
    className={`relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-cyan-800 left-6 cursor-pointer `}
  >
    <img src={src} alt={alt} className="w-12 h-12 rounded-full" />
    {unreadCount > 0 && (
      <span
        key={unreadCount}
        className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1 animate-bounce"
      >
        {unreadCount}
      </span>
    )}
  </div>
);

export default Avatar;
