export default function RegisterInput({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  hasError
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-gray-300 appearance-none border-2 border-gray-400 rounded w-full py-3 px-7 text-gray-700 leading-tight focus:outline-none focus:bg-white ${
        hasError
          ? 'border-red-500 focus:ring-red-300'
          : 'focus:ring-blue-300 focus:border-blue-500 border-gray-300'
      }
      `}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}