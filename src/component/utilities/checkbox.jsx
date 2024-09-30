import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Checkbox = ({ withText, handleToggle, check }) => {
  const [checked, setChecked] = useState(check);

  useEffect(() => {
    handleToggle(checked);
  }, [checked]);
  return (
    <div
      className="flex items-center w-full pt-3 pb-2 pr-1  cursor-pointer"
      tabIndex={0} // Make the outer div focusable
      onFocus={() => {
        // Handle focus, e.g., add a visual focus indicator
      }}
      onBlur={() => {
        // Handle blur, e.g., remove visual focus indicator
      }}
    >
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(() => !checked);
          }}
          className="sr-only"
          aria-label={withText || "Checkbox"}
        />
        <div className="grid place-content-center size-5 border border-gray-300 rounded-md hover:bg-gray-200  overflow-clip">
          <AnimatePresence>
            <motion.div
              className={`${
                checked
                  ? "bg-indigo-600 hover:bg-indigo-700 border-indigo-600"
                  : " border-gray-300"
              } grid place-content-center rounded-md size-5`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                ease: "easeInOut",
                duration: 0.3, // Set a reasonable animation duration
                type: "spring",
                stiffness: 120,
              }}
            >
              {checked && <i className="bi bi-check text-base text-white"></i>}
            </motion.div>
          </AnimatePresence>
        </div>
        {withText && (
          <p className="text-base font-medium text-gray-700 hover:text-gray-900 hover:scale-105">
            {withText}
          </p>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
