import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

export default function App() {
  const [count, setCount] = useState(0);

  const handleAddRecipe = (recipe) => {
    console.log("New Recipe:", recipe);
    // هنا ممكن تزيده في الstate أو ترسله للـ backend
  };

  return (
    <Router>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">🍽 Recipe App</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/add" className="hover:text-blue-500">Add Recipe</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <div className="text-center my-6">
                <h1 className="text-4xl font-bold text-blue-500 mb-4">
                  Hello Tailwind 🚀
                </h1>
                <div className="flex justify-center gap-6">
                  <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button
                    onClick={() => setCount((count) => count + 1)}
                    className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600 transition"
                  >
                    count is {count}
                  </button>
                  <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
                </div>
              </div>
            </>
          }
        />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
}
