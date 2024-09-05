import { useState } from "react";
import "./input.scss";

export function Input({ label, type, id, placeholder }) {
  const [startDate, setStartDate] = useState("");

  const handleChange = (e) => {
    setStartDate(e.target.value);
  };

  if (type === "text")
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
  if (type === "month")
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
          value={startDate}
          onChange={handleChange}
        />
      </div>
    );
  if (type === "textarea")
    return (
      <div className="input-group flex flex-col w-full h-fit">
        <label
          className="form-label uppercase md:capitalize mb-[6px] text-xs text-gray-700 font-medium"
          htmlFor="firstName"
        >
          {label}
        </label>
        <textarea
          className="form-control "
          type={type}
          id={id}
          name={id}
          value={startDate}
          onChange={handleChange}
          rows="4"
          placeholder={placeholder}
        ></textarea>
      </div>
    );
}
