import './App.css'
import { Nav } from './componentes/Navegador'
import { Home } from './componentes/Home'
import { Art } from './componentes/Article'
import { Card } from './componentes/Card'
import {Sello} from './componentes/Sello'
function App() {

  return (
    <div className='container'>
      <Nav />    
      <div className='section'>
        <Home />
        <Art />
      </div>
      <div className='bottom'>
        <Card />
        <Sello />
      </div>
    </div>
  )
}

export default App
