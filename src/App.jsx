import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>DevOps Agent Test</h1>
        <p>A sample React app for testing the CI/CD agent.</p>
        <div className="card">
          <button onClick={() => setCount((c) => c + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and the CI/CD pipeline will build it.
          </p>
        </div>
        <p className="footer">Built with React + Vite</p>
      </header>
    </div>
  )
}

export default App
