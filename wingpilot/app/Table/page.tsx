'use client'; 

import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import Layout from "../components/Layout";
import Form from "./Form";
import {
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";

interface TableRow {
  id: string;
  name: string;
  job: string;
  date: string;
  qualities: string; // Added 'qualities' field
}

const TABLE_HEAD: string[] = ["Name", "Job", "Date Joined", "Qualities", ""];

const Table: React.FC = () => {
  const [tableRows, setTableRows] = useState<TableRow[]>([
    {
      id: "1",
      name: "John Michael",
      job: "Manager",
      date: "23/04/18",
      qualities: "honesty, Disciplied, Punctual", // Example qualities
    },
    // Other initial data...
  ]);

  // Implementing the useCopilotReadable to describe the user's employee list
  useCopilotReadable({
    description: "The user's employee list.",
    value: tableRows,
  });

  const deleteEmployee = (id: string) => {
    setTableRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  // Implementing the useCopilotAction for deleting an employee from the list
  useCopilotAction({
    name: "deleteEmployee",
    description: "Delete an employee",
    parameters: [
      {
        name: "id",
        type: "string",
        description: "The id of the employee to delete.",
      },
    ],
    handler: ({ id }: { id: string }) => {
      deleteEmployee(id);
    },
    render: "Deleting an employee...",
  });

  const addEntry = (entry: TableRow) => {
    setTableRows([...tableRows, entry]);
  };

  // Implementing the useCopilotAction for updating the employee list
  useCopilotAction({
    name: "updateEmployeeList",
    description: "Update the employee list",
    parameters: [
      {
        name: "items",
        type: "object[]",
        description: "The new and updated employee list items.",
        attributes: [
          {
            name: "id",
            type: "string",
            description: "The id of the employee.",
          },
          {
            name: "name",
            type: "string",
            description: "The name of the employee.",
          },
          {
            name: "job",
            type: "string",
            description: "The job title of the employee.",
          },
          {
            name: "date",
            type: "string",
            description: "The date joined of the employee.",
          },
          {
            name: "qualities",
            type: "string",
            description: "The qualities of the employee.",
          },
        ],
      },
    ],
    handler: ({ items }: { items: TableRow[] }) => {
      setTableRows(items);
    },
    render: "Updating the employee list...",
  });

  return (
    <Layout>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map(({ id, name, job, date, qualities }, index) => {
              const isLast = index === tableRows.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {qualities}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                      onClick={() => deleteEmployee(id)}
                    >
                      Delete
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-10">
          <Form addEntry={addEntry} />
        </div>
      </Card>
    </Layout>
  );
}

export default Table;
