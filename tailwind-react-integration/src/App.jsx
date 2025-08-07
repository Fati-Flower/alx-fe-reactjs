import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-3xl font-bold underline text-blue-500 mb-4">
        Hello Tailwind!
      </div>

      <div className="flex justify-center gap-8 mb-4">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-semibold text-center mb-4">Vite + React</h1>

      <div className="card text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-2"
        >
          count is {count}
        </button>
        <p>
          Edit <code className="text-sm bg-gray-100 p-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs mt-4 text-center text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
