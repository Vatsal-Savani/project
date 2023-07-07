import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Charts from "./pages/Charts";
import AuthModule from "./modules/AuthModule";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthModule>
        <Charts />
      </AuthModule>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
