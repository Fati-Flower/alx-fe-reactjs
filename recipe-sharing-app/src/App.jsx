import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'

function Home() {
  return (
    <div>
      <h2>🍽️ Welcome to the Recipe Sharing App</h2>
      <RecipeList />
    </div>
  )
}

function AddRecipe() {
  return (
    <div>
      <h2>Add a New Recipe</h2>
      <AddRecipeForm />
    </div>
  )
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>
}

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>🍲 Recipe App</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
