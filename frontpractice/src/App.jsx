import './App.css'
import { useEffect, useState } from 'react';
// import Page from './Page';
import axios from 'axios';


function App() {
  const [Fa1, setFa1] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:8080/api/about')
  //     .then(res => res.json())
  //     .then(data => setFa1(data))
  //     .catch(err => console.error("Error fetching data:", err));
  // }, []);

  useEffect(()=>{
    axios.get('http://localhost:8080/api/about')
    .then((res)=>{
      setFa1(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);

  return (
    <div className="App">
      {Fa1.map((Fa1, i) => (
        <div key={Fa1.id} className='AOP'>
          <h3>{Fa1.name}{Fa1.class}</h3>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default App;