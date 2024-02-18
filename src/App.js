import "./App.css";
import AllRoutes from "./Routes";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div>
        <Navbar/>
        <AllRoutes />
      </div>
    </>
  );
}

export default App;