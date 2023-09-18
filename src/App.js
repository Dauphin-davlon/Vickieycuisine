
import './App.css';
import NavBar from './components/nav';
import Menu from './components/Menue/menue';
import Intro from './components/Intro/intro'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Intro />
        <Menu />
        {/* Add other content here */}
      </div>
    </div>
  );
}

export default App;
