
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";
import { CopilotPopup } from "@copilotkit/react-ui";

import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CopilotKit url="/api/copilotkit">
      <CopilotSidebar instructions={
            "Help the user manage a employee list. If the user provides a high level info then  " +
            "break it down into different fields and add them to the employeelist"
          }
          defaultOpen={true}
          labels={{
            title: "You Assistant WingPilot",
            initial: "Hi you! 👋 How can I help you ?",
          }}
          clickOutsideToClose={false}>
        {children}
      </CopilotSidebar>
    </CopilotKit>
        
        </body>
    </html>
  );
}
