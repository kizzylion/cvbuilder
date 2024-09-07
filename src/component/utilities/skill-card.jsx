import { Button } from "./button";
import { Input } from "./input";

export function SkillCard({ cardTitle }) {
  return (
    <div className="skill-card flex flex-col bg-gray-50 rounded-xl border border-gray-400 overflow-hidden will-change-transform transition ease-out duration-200">
      <header className="flex justify-between items-center px-4 py-3 text-gray-900 border-b border-gray-400">
        <p className="text-sm lg:text-base font-semibold">{cardTitle}</p>
        <div className="card-actions flex gap-2">
          <Button
            type={"tertiary"}
            preIcon={<i className="bi bi-trash3-fill text-red-600"></i>}
          />
        </div>
      </header>
      <div className="card-body px-4 py-[14px] bg-white">
        <Input type="text" placeholder="Enter skill here" />
      </div>
    </div>
  );
}
