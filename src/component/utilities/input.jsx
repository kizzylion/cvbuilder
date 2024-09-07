import { useState } from "react";
import "./input.scss";

export function Input({
  label,
  type,
  id,
  placeholder,
  require,
  onChange,
  value,
}) {
  if (type === "text")
    return (
      <div className="input-group flex flex-col w-full h-fit">
        <label
          className="form-label uppercase md:capitalize mb-[6px] text-xs text-gray-700 font-medium"
          htmlFor={id}
        >
          {label} {require && <span className="text-red-600">*</span>}
        </label>
        <input
          className="form-control text-gray-900 "
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={require}
        />
      </div>
    );
  if (type === "tel")
    return (
      <div className="input-group flex flex-col w-full h-fit">
        <label
          className="form-label uppercase md:capitalize mb-[6px] text-xs text-gray-700 font-medium"
          htmlFor={id}
        >
          {label}
          {require && <span className="text-red-600"> *</span>}
        </label>
        <input
          className="form-control text-gray-900 "
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={require}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  if (type === "email")
    return (
      <div className="input-group flex flex-col w-full h-fit">
        <label
          className="form-label uppercase md:capitalize mb-[6px] text-xs text-gray-700 font-medium"
          htmlFor={id}
        >
          {label} {require && <span className="text-red-600"> *</span>}
        </label>
        <input
          className="form-control text-gray-900 "
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={require}
          value={value}
          onChange={onChange}
        />
      </div>
    );

  if (type === "textarea")
    return (
      <div className="input-group flex flex-col w-full h-fit">
        <label
          className="form-label uppercase md:capitalize mb-[6px] text-xs text-gray-700 font-medium"
          htmlFor={id}
        >
          {label}
          {require && <span className="text-red-600">*</span>}
        </label>
        <textarea
          className="form-control text-gray-900 "
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          rows="4"
          placeholder={placeholder}
          required={require}
        ></textarea>
      </div>
    );
}
