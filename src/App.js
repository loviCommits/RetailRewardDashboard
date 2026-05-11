import MainLayout from "./components/layout/mainLayout";
import Dashboard from "./pages/dashboard";

import "./styles/global.css";

function App() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}

export default App;