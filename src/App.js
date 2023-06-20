import './App.css';
import NavBar from './components/NavBar.js';
import ItemList from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemList greeting='Bienvenido a Clean Car | Lavado de vehículos' />
    </div>
  );
}

export default App;
