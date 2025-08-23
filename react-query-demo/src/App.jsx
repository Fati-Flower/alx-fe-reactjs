import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsComponent from "./components/PostsComponent";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-6">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-2xl font-bold mb-6">Vite + React + React Query Demo</h1>

      <div className="card mb-6">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <PostsComponent />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

["QueryClient", "QueryClientProvider", "queryClient", "client={queryClient}"]
