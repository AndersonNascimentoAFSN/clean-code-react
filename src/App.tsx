import { useState } from "react"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

import * as Input from './Components/InputComposition'

// Dois critérios para componentização:
// 1. Quando eu tenho algo repetitivo;
// 2. Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original);

export function App() {
  const [todos, setTodo] = useState<string[]>([])

  function handleCreateNewTodo() {

  }

  const isTodoListEmpty = todos.length === 0

  return (
    <div>
      <Header onCreateNewTodo={() => { }} />

      <Input.Root>
        <Input.Label />
        <Input.FormField />
        <Input.Icon>
          <span></span>
        </Input.Icon>
        <Input.ErrorMessage message="Digite seu nome corretamente" />
      </Input.Root>

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

        {isTodoListEmpty && (
          <p>Nenhum todo cadastrado.</p>
        )}

      </main>

      <Footer />
    </div>
  )
}

