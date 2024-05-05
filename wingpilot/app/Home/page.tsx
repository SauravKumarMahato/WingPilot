"use client";

import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="">
        <h2 className="text-2xl text-center my-16">WingPilot</h2>
        <p className="px-28 font-sans text-lg  font-normal leading-relaxed text-inherit">
          Welcome to WingPilot, where seamless interaction with your employee
          dataset is made possible through our innovative Copilot Kit library.
          Managing and understanding your employee data has never been easier –
          whether it <i></i>s discussing insights, adding new employees, or removing
          outdated information, our intuitive chat interface powered by Copilot
          Kit streamlines the entire process. With the ability to engage in
          natural language conversations, you can effortlessly navigate through
          your dataset, gaining valuable insights and making informed decisions.
          Experience the convenience of data management like never before with
          WingPilot.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
