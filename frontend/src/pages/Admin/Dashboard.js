import React from "react";
import "./Styles.css";
import Navbar from "../../Shared/Components/Navigation/Dashboard/Navbar";
import Sidebar from "../../Shared/Components/Navigation/Dashboard/Sidebar";
import Table from "../../Shared/Components/UIElements/Table";
export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Table />
    </>
  );
}
