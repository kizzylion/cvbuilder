import { FormHeading } from "../utilities/formheading";

import { Input } from "../utilities/input";
import { Button } from "../utilities/button";
import { MonthInput } from "../utilities/monthinput";

export function WorkHistory({ handleBack, handleNext }) {
  return (
    <>
      <div className="work grid grid-cols-1 lg:grid-cols-[58%_38%] gap-16 mb-5">
        <div className="content w-full">
          <FormHeading
            title={"Tell us about your job most recent job."}
            subtitle={"We’ll start there and work backward."}
            instruction={true}
            handleBack={handleBack}
          />
          <form action="#">
            <div className="grid grid-cols-2 gap-5 lg:gap-6">
              <Input
                label={"Job Title"}
                type={"text"}
                id={"jobTitle"}
                placeholder={"eg. Web Developer"}
              />
              <Input
                label={"Employer"}
                type={"text"}
                id={"employer"}
                placeholder={"eg. Microsoft"}
              />
              <div className="col-span-2">
                <Input
                  label={"Job Location"}
                  type={"text"}
                  id={"jobLocationn"}
                  placeholder={"eg. Lagos, Nigeria"}
                />
              </div>
              <MonthInput
                label={"Start Date"}
                type={"month"}
                id={"startDate"}
              />
              <MonthInput label={"End Date"} type={"month"} id={"endDate"} />

              <div className="col-span-2 md:col-span-1">
                <Input
                  label={"Phone"}
                  type={"tel"}
                  id={"phone"}
                  placeholder={"eg. +2349023456789"}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label={"Email"}
                  type={"email"}
                  id={"email"}
                  placeholder={"eg. johndoe@example.com"}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="action-section w-full flex-col md:flex-row flex justify-end gap-3 mt-auto py-4">
        <div className="order-1 md:order-0 ">
          <Button
            type={"secondary"}
            label={"Preview"}
            preIcon={false}
            postIcon={false}
          />
        </div>
        <div className="order-0 md:order-1">
          <Button
            type={"primary"}
            label={"Next: Work History"}
            preIcon={false}
            postIcon={false}
            onClick={handleNext}
          />
        </div>
      </footer>
    </>
  );
}
