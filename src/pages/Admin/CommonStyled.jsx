export const AdminHeaders = () => {
  return <div className="flex justify-between">{/* Your content */}</div>;
};

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-3 rounded-lg font-semibold bg-green text-white border-none outline-none cursor-pointer mt-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default { AdminHeaders, PrimaryButton };
