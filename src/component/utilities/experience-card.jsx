import { useState } from "react";
import { Button } from "./button";

export function ExperienceCard({
  cardTitle,
  title,
  title2,
  subtitle1,
  subtitle2,
  description,
  handleEdit,
  handleDelete,
}) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="experience-card flex flex-col bg-gray-50 rounded-xl border border-gray-400 overflow-hidden will-change-transform transition ease-out duration-200">
      <header className="flex justify-between items-center px-4 py-3 text-gray-900 border-b border-gray-400">
        <p className="text-sm lg:text-base font-semibold">{cardTitle}</p>
        <div className="card-actions flex gap-2">
          <Button
            type={"tertiary"}
            preIcon={<i className="bi bi-pencil-fill font-bold"></i>}
            onClick={handleEdit}
          />
          <Button
            type={"tertiary"}
            preIcon={<i className="bi bi-trash3-fill text-red-600"></i>}
            onClick={handleDelete}
          />
        </div>
      </header>
      <div className="card-body px-4 py-[14px] bg-white">
        <h4 className="text-gray-950 font-medium">
          <span>{title}</span>, <span>{title2}</span>.
        </h4>
        <p className="text-sm text-gray-500">
          <span>{subtitle1}</span> - <span>{subtitle2}</span>
        </p>
        {/* Using max-height with a large enough value */}
        <div
          className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
            showMore ? "max-h-96" : "max-h-16"
          }`}
        >
          <p className="py-1 pl-8 text-sm w-full md:w-3/4 text-gray-600">
            {description}
          </p>
        </div>
        {description ? (
          <Button
            type={"tertiary"}
            label={showMore ? "Show less" : "Show more"}
            onClick={handleShowMore}
          />
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
