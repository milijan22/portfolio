import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import Chat from "./components/Chat/Chat";
import MainWindow from "./components/Main/MainWindow";
import ToDoList from "./components/Projects/ToDoList/ToDoList";
import CurrencyConverter from "./components/Projects/CurrencyConverter/CurrencyConverter";
import WeatherApp from "./components/Projects/WeatherApp/WeatherApp";
import ProjectsPage from "./components/Projects/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
        }}
      />

      <div className="relative">
        <BrowserRouter>
          <Header />
          <div className="items-center">
            <Chat />

            <Routes>
              <Route path="/" element={<MainWindow />} />
              <Route path="/tasks" element={<ToDoList />} />
              <Route path="/currency" element={<CurrencyConverter />} />
              <Route path="/weather" element={<WeatherApp />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
