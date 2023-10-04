import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home.js';
import NoPage from './pages/noPage.js';
import SignIn from './pages/signIn.js';
import SignUp from './pages/signUp.js';
import DashBoard from './pages/dashboard.js';
import Feedback from './pages/Feedback.js';
import EmpReview from './pages/EmpReview.js';
<<<<<<< HEAD
import Survey from './pages/Survey.js';
import Chart from 'chart.js/auto';
import Footer from "./components/Footer";




=======
import Report from './pages/Report.js';
import Survey from './pages/Survey.js';
>>>>>>> 6fbca15bef617fe1e109649f8a6c460495e2448d

function App() {
  return (
    <><BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<NoPage />} />
        <Route exact path="/sign-in" element={<SignIn />} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/dashboard" element={<DashBoard />} />
<<<<<<< HEAD
        <Route exact path='/Feedback' element={<Feedback />}/>
        <Route exact path= "/Survey" element={<Survey/>}/>
        <Route exact path='/EmpReview' element={<EmpReview />}/>
        <Route exact path='/Chart' element={<Chart/>}/>
        

=======
        <Route exact path='/feedback' element={<Feedback />}/>
        <Route exact path='/employeeReview' element={<EmpReview />}/>
        <Route exact path="/report" element={<Report/>}/>
        <Route exact path='/survey' element={<Survey/>}/>
>>>>>>> 6fbca15bef617fe1e109649f8a6c460495e2448d
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
