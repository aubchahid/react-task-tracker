import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAdd, setShowAdd] = React.useState(false);
  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          showAdd={showAdd}
          onAdd={() => setShowAdd(!showAdd)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Tasks showAdd={showAdd} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
