import { Button } from "../utilities/button";

export function FilterSection({ isOpen, handleMultiForm }) {
  return (
    <div
      id="filterSection"
      className={`max-w-7xl ${
        !isOpen && "hidden"
      } mx-auto w-full flex px-4 md:px-6 lg:px-8 py-5  text-gray-900`}
    >
      <div className="flex justify-between items-center w-full gap-4">
        <h2 className="text-lg font-semibold">My Resumes</h2>
        <div className="filter-actions">
          <Button
            type={"secondary"}
            label={"Create Resume"}
            preIcon={false}
            postIcon={false}
            onClick={handleMultiForm}
          />
        </div>
      </div>
    </div>
  );
}
