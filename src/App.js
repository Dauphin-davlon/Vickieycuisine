
import './App.css';
import { BrowserRouter, Routes, Route ,Outlet} from 'react-router-dom'
import NavBar from './components/NavBar/nav';
import Menu from './components/Menue/menue';
import Intro from './components/Intro/intro'
import Footer from './components/Footer/Footer';

function App() {

  const Layout = () => {
    return (
      <>
    <NavBar />
     <Outlet />
    <Footer />
    </>
 ) }

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Intro />
        <Menu />
        {/* Add other content here */}
      </div>



      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={""} /> 
          <Route path='/' element={""} /> 
          <Route path='/' element={""} /> 
          <Route path='/' element={""} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
