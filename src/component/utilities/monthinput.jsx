import "./input.scss";

export function MonthInput({ label, type, id, value, onChange, require, min }) {
  if (type === "month")
    return (
      <div className="input-group flex flex-col w-full h-fit">
        <label
          className="form-label uppercase md:capitalize mb-[6px] text-xs text-gray-700 font-medium"
          htmlFor={id}
        >
          {label}
          {require && <span className="text-red-600">*</span>}
        </label>
        <input
          className="form-control "
          type={type}
          id={id}
          name={id}
          min={min || "1970-01"}
          value={value}
          onChange={onChange}
          required={require}
        />
      </div>
    );
}
