import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage.jsx';
import Authentication from './pages/Authentication.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
import VideoMeeting from './pages/VideoMeeting.jsx';
function App() {


  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path='/auth' element={<Authentication />}></Route>
            <Route path="/:url" element={<VideoMeeting/>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
