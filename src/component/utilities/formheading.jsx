import { Button } from "./button";

export function FormHeading({ title, subtitle, instruction }) {
  return (
    <div className="form_heading flex flex-col gap-4 mb-5">
      <Button
        type={"tertiary"}
        label={"Go back"}
        preIcon={<i className="bi bi-arrow-left "></i>}
        //   postIcon={<i className="bi bi-arrow-left-short"></i>}
      />
      <div className="title_subtitle gap-3 flex flex-col">
        <h2
          className={`lg:text-4xl font-normal text-gray-950 ${
            title ? "block" : "hidden"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-gray-600 lg:text-lg ${
            subtitle ? "block" : "hidden"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <p
        className={`text-gray-900 font-semibold ${
          instruction ? "block" : "hidden"
        }`}
      >
        <span className="text-red-600 font-bold">*</span> indicates a required
        field
      </p>
    </div>
  );
}
