import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import TaskForm from "./components/TaskForm";
import TaskPage from "./components/TaskPage";
import { TaskContextProvider } from "./context/TaskContext";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
         <Nav />
      <div className="container mx-auto py-4 px-20">
     
        <TaskContextProvider>
          <Routes>
            <Route path="/" element={<TaskPage />} />
            <Route path="/create" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
