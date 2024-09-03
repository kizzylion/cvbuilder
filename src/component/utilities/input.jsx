import "./input.scss";

export function Input({ label, type, id, placeholder }) {
  return (
    <div className="input-group flex flex-col w-full h-fit">
      <label
        className="form-label uppercase md:capitalize mb-[6px] text-xs text-gray-700 font-medium"
        htmlFor="firstName"
      >
        {label}
      </label>
      <input
        className="form-control "
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </div>
  );
}
