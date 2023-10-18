export default function CreateProductForm({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-5 py-4 mt-1 break-all bg-gray border border-black text-black text-md rounded-lg focus:ring-neutral2 focus:border-neutral2 block w-full p-2.5 dark:bg-white dark:border-gray dark:placeholder-stone dark:text-black dark:focus:ring-neutral2 dark:focus:border-neutral2"
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
