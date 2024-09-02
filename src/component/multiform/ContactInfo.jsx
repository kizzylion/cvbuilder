import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import "./contactInfo.scss";

export function ContactInfo() {
  return (
    <div className="contact grid grid-cols-[58%_38%] gap-16">
      <div className="content w-full">
        <FormHeading
          title={"Whats the best way for employers to contact you?"}
          subtitle={"We suggest including an email and phone number."}
          instruction={true}
        />
      </div>
      <div className="preview_area p-5 w-full">
        <div className="preview aspect-[1/1.41] overflow-hidden">
          <TemplatePaper />
        </div>
      </div>
    </div>
  );
}
