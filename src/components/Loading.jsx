export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-2 animate-pulse">
        <div className="w-3 h-3 bg-sky rounded-full"></div>
        <div className="w-3 h-3 bg-sky rounded-full"></div>
        <div className="w-3 h-3 bg-sky rounded-full"></div>
      </div>
    </div>
  );
}
