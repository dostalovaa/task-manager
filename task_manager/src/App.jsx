import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllTasksToDo from "./pages/AllTasksToDo";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0D0714] h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-tasks-to-do" element={<AllTasksToDo />} />
            <Route path="/completed-tasks" element={<CompletedTasks />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
