import "./index.css";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Docs = lazy(() => import("./pages/Docs"));
const Egghead = lazy(() => import("./pages/Egghead"));
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/docs"
          element={
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Docs />
            </Suspense>
          }
        />
        <Route
          path="/egghead"
          element={
            <Suspense
              fallback={
                <div className="h-screen flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <Egghead />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
