import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.js';
import NoPage from './pages/noPage.js';
import SignIn from './pages/signIn.js';
import SignUp from './pages/signUp.js';
import DashBoard from './pages/dashboard.js';
import Feedback from './pages/Feedback.js';
import EmpReview from './pages/EmpReview.js';
import Survey from './pages/Survey.js';
import Report from './pages/Report.js';
import FormBuilder from './components/FormBuilder';


function App() {
  return (
    <><BrowserRouter>
      <Routes>
        
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NoPage />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
        <Route exact path='/feedback' element={<Feedback />}/>
        <Route exact path='/employeeReview' element={<EmpReview />}/>
        <Route exact path="/report" element={<Report/>}/>
        <Route exact path='/survey' element={<Survey/>}/>
        <Route exact path='/FormBuilder' element={<FormBuilder/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

