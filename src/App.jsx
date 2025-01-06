import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Container from "@mui/material/Container";

const App = () => (
  <Router>
    <div className="flex">
      <Sidebar />
      <Container className="flex-1 p-5">
        <Routes>
          <Route path="/" element={<ProjectListPage />} />
          <Route path="/edit/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Container>
    </div>
  </Router>
);

export default App;
