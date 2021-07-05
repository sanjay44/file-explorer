import Sidebar from "./components/Sidebar";
import AppContent from "./components/AppContent";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <AppContent />
    </div>
  );
}

export default App;
