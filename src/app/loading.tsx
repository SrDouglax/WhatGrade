export default function Loading() {
  return (
    <div className="balls w-full h-full bg-gray-900 first-letter flex items-center justify-center gap-2">
      <div
        className="animate-bounce bg-white w-3 h-3 rounded-md"
        style={{ animationDelay: "200ms" }}></div>
      <div
        className="animate-bounce bg-white w-3 h-3 rounded-md"
        style={{ animationDelay: "100ms" }}></div>
      <div className="animate-bounce bg-white w-3 h-3 rounded-md"></div>
    </div>
  );
}
