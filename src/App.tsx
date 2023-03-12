import { useState } from "react"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

// Dois critérios para componentização:
// 1. Quando eu tenho algo repetitivo;
// 2. Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original);

export function App() {
  const [todos, setTodo] = useState<string[]>([])

  function handleCreateNewTodo() {
    
  }

  return (
    <div>
      <Header onCreateNewTodo={() => {}}/>

      <main>
        <h2>Advantages</h2>

        <section>
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>
          </div>

          <div>
            <h3>No CSS</h3>
            <p>Clean and flat design with no CSS.</p>
          </div>
        </section>

        <ul>{todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
      </main>

      <Footer />
    </div>
  )
}

