const Bubble = ({ isFirst, children }) => {
  return (
    <div
      className={`space  max-w-sm text-white overflow-hidden shadow-lg bg-cyan-950 p-4 m-2 animate-popIn ${
        isFirst ? "rounded-e-xl rounded-es-xl" : "rounded-b-xl rounded-t-md"
      }`}
    >
      {children}
    </div>
  );
};
export default Bubble;
