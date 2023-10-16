export default function LoginInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="appearance-none border-2 border-gray2 rounded w-full py-3 px-20 text-natural leading-tight focus:outline-none focus:bg-white "
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
