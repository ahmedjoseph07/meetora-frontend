import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Authentication from './pages/Authentication.jsx';
function App() {


  return (
    <>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage/>}></Route>
        <Route path='/auth' element={<Authentication/>}></Route>
        
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
