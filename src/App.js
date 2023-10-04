import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.js';
import NoPage from './pages/noPage.js';
import SignIn from './pages/signIn.js';
import SignUp from './pages/signUp.js';
import DashBoard from './pages/dashboard.js';
import Survey from './pages/Survey.js';
import Feedback from './pages/Feedback.js';
// import Responses from './pages/Responses.js';
import EmpReview from './pages/EmpReview';


function App() {
  return (
    <><BrowserRouter>
      <Routes>
        
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NoPage />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path='/Feedback' element={<Feedback />}/>
        <Route exact path= "/Survey" element={<Survey/>}/>
        {/* <Route exact path="/Repsonses" element={<Responses/>}/> */}
        <Route exact path="/EmpReview" element={<EmpReview />}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

