import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

let Options: string[] = ["Home", "Table", "About", "Contact"];

export function DefaultSidebar() {
  return (
    <Card className="h-[calc(80vh-2rem)] w-half max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          WingPilot
        </Typography>
      </div>
      <List>
        {Options.map((option) => (
          <Link href={option} key={option}>
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              {option}
            </ListItem>
          </Link>
        ))}
      </List>
    </Card>
  );
}
