import { Button } from "./button";

export function FormHeading({ title, subtitle, instruction, closeMultiform }) {
  return (
    <div className="form_heading flex flex-col gap-4 mb-5">
      <Button
        type={"tertiary"}
        label={"Go back"}
        preIcon={<i className="bi bi-arrow-left "></i>}
        //   postIcon={<i className="bi bi-arrow-left-short"></i>}
        onClick={closeMultiform}
      />
      <div className="title_subtitle gap-1 lg:gap-2 flex flex-col max-w-3xl">
        <h2
          className={`text-2xl md:text-4xl lg:text-4xl font-semibold text-gray-950 ${
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
