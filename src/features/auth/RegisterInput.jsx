export default function RegisterInput({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`appearance-none border-2 rounded w-full py-3 px-7 text-natural leading-tight focus:outline-none focus:bg-white ${
        hasError
          ? "border-red-500 focus:ring-red"
          : "focus:ring-white focus:border-stone border-gray2"
      }
      `}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
