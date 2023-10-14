export default function LoginInput({
  placeholder,
  type = 'text',
  value,
  onChange
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-gray-300 appearance-none border-2 border-gray-400 rounded w-full py-3 px-20 text-gray-700 leading-tight focus:outline-none focus:bg-white "
        value={value}
        onChange={onChange}
      />
    </div>
  );
}