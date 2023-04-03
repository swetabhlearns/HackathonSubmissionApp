import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import SubmissionForm from "./screens/Form";
import Details from "./screens/Details";
import { DataProvider } from "./DataContext";
import Edit from "./screens/Edit";
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<SubmissionForm />} />
            <Route path="/details" element={<Details />} />
            <Route path="/details/edit" element={<Edit />} />
          </Routes>
        </Router>
      </DataProvider>
    </div>
  );
}

export default App;
