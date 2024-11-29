import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage';
function App() {


  return (
    <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
