"use client";

import { CopilotTextarea } from "@copilotkit/react-textarea";
import { CopilotKit } from "@copilotkit/react-core";

import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  CardFooter,
} from "@material-tailwind/react";

interface FormData {
  id: string; // Added 'id' field
  name: string;
  job: string;
  date: string;
  qualities: string; // Added 'qualities' field
}

interface Props {
  addEntry: (formData: FormData) => void;
}

const Form: React.FC<Props> = ({ addEntry }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    id: "", // Initialized 'id' field
    name: "",
    job: "",
    date: "",
    qualities: "", // Initialized 'qualities' field
  });

  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    addEntry(formData);
    setFormData({
      id: "", // Reset 'id' field
      name: "",
      job: "",
      date: "",
      qualities: "", // Reset 'qualities' field
    });
    handleOpen();
  };

  return (
    <>
      <CopilotKit url="/api/copilotkit">
        {/* Global state & copilot logic. Put this around the entire app */}
        <Button onClick={handleOpen}>Add Entry</Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Add your entry
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                fill the information below
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Name
              </Typography>
              <Input
                label="Name"
                size="lg"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Typography className="-mb-2" variant="h6">
                Job
              </Typography>
              <Input
                label="Job"
                size="lg"
                name="job"
                value={formData.job}
                onChange={handleChange}
              />
              <Typography className="-mb-2" variant="h6">
                Date Joined
              </Typography>
              <Input
                label="Date"
                size="lg"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <Typography className="-mb-2" variant="h6">
                Qualities
              </Typography>
              <CopilotTextarea
                className="peer w-[42vh] h-[20vh] bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent placeholder:opacity-0 focus:placeholder:opacity-100 text-sm px-3 py-3 rounded-md border-blue-gray-200 focus:border-gray-900"
                label="Qualities"
                placeholder="Briefly describe qualities of the employee..."
                value={formData.qualities}
                onValueChange={(value: string) =>
                  setFormData({ ...formData, qualities: value })
                }
                autosuggestionsConfig={{
                  textareaPurpose:
                    "Suggest something similar and best about the employee based on the information provided.",
                  chatApiConfigs: {
                    suggestionsApiConfig: {
                      forwardedParams: {
                        max_tokens: 20,
                        stop: [".", "?", "!"],
                      },
                    },
                  },
                }}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleSubmit} fullWidth>
                Add
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </CopilotKit>
    </>
  );
};

export default Form;
