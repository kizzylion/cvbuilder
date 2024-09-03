import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import "./contactInfo.scss";
import { Input } from "../utilities/input";

export function ContactInfo() {
  return (
    <div className="contact grid grid-cols-1 lg:grid-cols-[58%_38%] gap-16">
      <div className="content w-full">
        <FormHeading
          title={"Whats the best way for employers to contact you?"}
          subtitle={"We suggest including an email and phone number."}
          instruction={true}
        />
        <form action="#">
          <div className="grid grid-cols-2 gap-5  md:gap-7 lg:gap-10">
            <Input
              label={"First Name"}
              type={"text"}
              id={"firstName"}
              placeholder={"eg. John"}
            />
            <Input
              label={"Last Name"}
              type={"text"}
              id={"lastName"}
              placeholder={"eg. Doe"}
            />
            <div className="col-span-2">
              <Input
                label={"Profession"}
                type={"text"}
                id={"profession"}
                placeholder={"Web Developer"}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="preview_area flex p-5 w-full">
        <div className="preview aspect-[1/1.41] flex w-full h-full overflow-hidden">
          <TemplatePaper />
        </div>
      </div>
    </div>
  );
}
