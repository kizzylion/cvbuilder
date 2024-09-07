export function Button({ label, type, preIcon, postIcon, onClick }) {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        className="flex flex-row px-4 md:px-5 lg:px-6 py-3 bg-amber-400 hover:bg-amber-500 border border-amber-400 rounded-full text-sm lg:text-base font-semibold text-amber-950 focus:ring-2 ring-amber-600 overflow-hidden gap-1 w-full md:w-fit justify-center"
      >
        <span className={`${preIcon ? "block" : "hidden"} w-5 h-5`}>
          {preIcon}
        </span>
        {label}
        <span className={`${postIcon ? "block" : "hidden"} w-5 h-5`}>
          {postIcon}
        </span>
      </button>
    );
  } else if (type === "secondary") {
    return (
      <button
        onClick={onClick}
        className="flex flex-row px-4 md:px-5 lg:px-6 py-3 hover:bg-indigo-50 focus:bg-indigo-50 border border-indigo-800 rounded-full text-sm lg:text-base font-semibold text-indigo-800 focus:ring-2 ring-indigo-200 overflow-hidden gap-1 justify-center w-full md:w-fit"
      >
        <span className={`${preIcon ? "block" : "hidden"} w-5 h-5`}>
          {preIcon}
        </span>
        {label}
        <span className={`${postIcon ? "block" : "hidden"} w-5 h-5`}>
          {postIcon}
        </span>
      </button>
    );
  } else if (type === "tertiary") {
    return (
      <button
        onClick={onClick}
        className="flex flex-row px-1 py-1 hover:bg-indigo-50 hover:bg-transparent hover:underline focus:underline   border-0 border-indigo-800 text-sm lg:text-base font-semibold text-indigo-800 focus:ring-0 ring-indigo-200 overflow-hidden gap-1 w-fit  "
      >
        <span className={`${preIcon ? "block" : "hidden"} w-5 h-5`}>
          {preIcon}
        </span>
        {label}
        <span className={`${postIcon ? "block" : "hidden"} w-5 h-5`}>
          {postIcon}
        </span>
      </button>
    );
  }
}
