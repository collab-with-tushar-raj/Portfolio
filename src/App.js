import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Login from './login';
import Home from './Home';

function App() {

  // const [profile, setProfile] = useState(null);
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (user) {
  //     axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
  //       headers: {
  //         Authorization: `Bearer ${user.access_token}`,
  //         Accept: 'application/json'
  //       }
  //     })
  //       .then((res) => setProfile(res.data))
  //       .catch((err) => console.error(err));
  //   }
  // }, [user]);

  return (
    <div className="App">
      {/* {profile ? <Home /> : <Login setUser={setUser} />} */}
      <Home />
    </div>
  );
}

export default App;
