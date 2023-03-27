import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import SignUp from './Components/SignUp';
import LoginPage from './Components/LoginPage';
import PostPeep from './Components/PostPeep';
import { getPeepsAsync } from './utils/peepsData';
//import { peeps } from './mockData.js'
import './Components/css/header.css';


function App() {

  const [user, setUser] = useState({});
  const [peeps, setPeeps] = useState([]);
  const [setError] = useState({})


  const getPeeps = async () => {

    const peeps = await getPeepsAsync();

    if (peeps?.error) {
      setError(peeps);
      setUser([]);

    }

    if (!peeps?.error) {
      setPeeps(peeps);
      setError({});
    }
  }

  useEffect(() => { getPeeps() });



  return (

    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage user={user} peeps={peeps} setUser={setUser} />} />
            <Route path="/login" element={<LoginPage setUser={setUser} />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/post" element={<PostPeep user={user} />} />
          </Routes>
        </Router>
      </div>


    </>
  )
}

export default App;

