import { useState, useEffect } from "react";
import "./input.scss";

export function MonthInput({ label, type, id, value, onChange, require }) {
  const [startDate, setStartDate] = useState("");

  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Add leading zero if necessary
    return `${year}-${month}`;
  };

  useEffect(() => {
    // Set the initial value to the current month
    setStartDate(getCurrentMonth());
  }, []);

  const handleChange = (e) => {
    setStartDate(e.target.value);
  };

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
          min={"1970-01"}
          value={value}
          onChange={onChange}
          required={require}
        />
      </div>
    );
}
