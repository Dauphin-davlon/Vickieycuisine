
import './App.css';
import NavBar from './components/NavBar/nav';
import Menu from './components/Menue/menue';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Menu />
        {/* Add other content here */}
      </div>
    </div>
  );
}

export default App;
