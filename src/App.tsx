import './reset.css'
import './index.css'

const clickHere = () => {
  return (
    alert('Clicou besta')
  )
}

const App = () => {
  return (
    <div>
      Olá
      <button onClick={clickHere}>Clique aqui</button>
    </div>
  )
}

export default App