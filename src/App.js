import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: '',
  });

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async (city) => {
    try{
    const APIKEY = '02ff729d3a221b48e9dbed52ca68642c'
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'new york'}&appid=${APIKEY}&units=metric`);
    await setAllData({
      city: result.data.name,
      country: result.data.sys.country,
      temperature: result.data.main.temp,
    })
    } catch (e) {
      console.log('API not loaded correctly or loaded for the first time');
    }
  }


  return(
    <main>
      <div className="App">
        {console.log('testing.....', allData.country, allData.city, allData.temperature)}
        <section>
          <h1>{allData.city}</h1>
          <h2>{allData.country}</h2>
          <h3>Temperature</h3>
          <p>{allData.temperature}°C</p>
        </section>
      </div>
    </main>
  );
}

export default App;
