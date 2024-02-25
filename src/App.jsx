import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/itemListContainer.jsx'

function App() {
    return (
    <>
      <NavBar/>
      <ItemListContainer greetings="hola"/>
    </>
  )
}

export default App
