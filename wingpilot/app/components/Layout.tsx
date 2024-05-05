import React, { PropsWithChildren } from "react";
import { DefaultSidebar } from "../SideBar";
import { Footer } from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="flex gap-4 my-4">
        <DefaultSidebar />
        {children}
      </div>
      <div className="m-20">
        <Footer />
      </div>
    </>
  );
};
export default Layout;
